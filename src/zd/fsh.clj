(ns zd.fsh
  (:require
   [stylo.core :refer [c]]
   [clojure.walk :as walk]
   [zd.utils :as utils]
   [hickory.core :as hickory]
   [clojure.string :as str]
   [zd.runner :as runner]
   [zd.methods :as methods]
   [clojure.java.io :as io]
   [zen.core :as zen])
  (:import [java.io StringReader]))

;; TODO implement delete from fsh folder doc delete
(defonce publisher (agent nil))

;; TODO wtf, look for process
(def in-progress? (atom nil))

(defn dirpath [fsh-dir]
  (str (System/getProperty "user.dir") "/" fsh-dir))

(defn inputdir [fsh-dir]
  (str (dirpath fsh-dir) "/input/fsh/"))

(defn get-hashes [ztx fsh-dir]
  (set (map hash (map slurp (.listFiles (io/file (inputdir fsh-dir)))))))

;; exec fhir publisher if fsh files have changed
(defn publish! [ztx {:keys [fsh-dir]}]
  (let [publish-fn*
        (fn [ag]
          ;; TODO push update to UI sub
          (reset! in-progress? true)
          (zen/pub ztx 'fhir-ru/on-ig-compile {:fsh-dir (dirpath fsh-dir)})
          (let [proc (runner/exec {:env {}
                                   ;; TODO launch different script on windows?
                                   :exec ["./_genonce.sh"]
                                   :dir (dirpath fsh-dir)})]
            (reset! in-progress? false)
            {:out (:stdout proc)
             :input-hashes (get-hashes ztx fsh-dir)}))
        publish-fn (utils/safecall ztx publish-fn* {:type :fhir-ru/fsh-publish-error})]
    (when (and (not @in-progress?)
               (not= (get-hashes ztx fsh-dir) (get-in @publisher [:result :input-hashes])))
      (send-off publisher publish-fn))))

(defmethod zen/op 'fhir-ru/fsh-init
  [ztx config ev & opts]
  (let [zd-config (zen/get-symbol ztx (:config config))]
    (zen/pub ztx 'fhir-ru/on-fsh-init {:dir (inputdir (:fsh-dir zd-config))})
    (doall (->> (inputdir (:fsh-dir zd-config))
                (io/file)
                (.listFiles)
                (remove #(.isDirectory %))
                (map #(io/delete-file %))))))

;; save fsh file and poll publisher
(defmethod zen/op 'fhir-ru/fsh-build
  [ztx config {ev-name :ev {{dn :docname :as m} :zd/meta :as doc} :params :as ev} & opts]
  (let [zd-config (zen/get-symbol ztx (:config config))]
    (doseq [k (filter (fn [k]
                        (= :fsh (get-in m [:ann k :zd/content-type])))
                      (:doc m))]
      ;; TODO think about file naming convention
      (let [fp (str (inputdir (:fsh-dir zd-config)) dn "_" (name k) ".fsh")]
        (.mkdirs (io/file (inputdir (:fsh-dir zd-config))))
        (spit fp (get doc k))
        (zen/pub ztx 'fhir-ru/on-fsh-compile {:dn dn :k k :fp fp})
          ;; TODO impl queue for publisher?
        (when @publisher
          (publish! ztx zd-config))))))

;; init publisher on load complete
(defmethod zen/op 'fhir-ru/fsh-publish
  [ztx config ev & opts]
  (let [zd-config (zen/get-symbol ztx (:config config))]
    (publish! ztx zd-config)))

(defn search-hiccup [tree [el-name attr-map & oth :as arg]]
  (if (sequential? tree)
    (let [[el attr & r] tree]
      (if (and (= el el-name) (map? attr) (= attr-map attr))
        tree
        (first (filter identity (map #(search-hiccup % arg) (rest tree))))))))

(defn map-links [p]
  (if (sequential? p)
    (let [[el attr & r] p]
      (if (map? attr)
        (if-let [src (get attr :src)]
          (if (not (str/starts-with? src "http"))
            (vec (into [el (update attr :src (fn [s] (str "/static/" s)))] r))
            p)
          p)
        p))
    p))

(defmethod methods/rendercontent :fsh
  [ztx ctx {d :data}]
  (if-let [fsh-dir (get-in ctx [:config :fsh-dir])]
    ;; get resource ids from fsh texts
    (let [ids (->> (-> (StringReader. d)
                       (io/reader)
                       (line-seq))
                   (filter #(str/starts-with? % "Id"))
                   (map (fn [id]
                          (second (re-matches #"^Id:\s*(\S+)" id))))
                   (set))
          ;; read publisher's output and filter ids
          fs
          (->> (file-seq (io/file (str fsh-dir "/output")))
               (filter (fn [f]
                         (some (fn [id]
                                 (str/includes? (.getName f) (str id ".html")))
                               ids)))
               (map (fn [f] [(.getName f) (slurp f)]))
               (map (fn [[fname cnt]]
                      ;; parse publisher's output and render hiccup
                      (let [tr (first (filter #(vector? %) (hickory/as-hiccup (hickory/parse cnt))))
                            diff-table (search-hiccup tr [:div {:id "tbl-diff"}])
                            cnt (if (nil? diff-table)
                                  [:div (str fname " view is not implemented yet")]
                                  (walk/postwalk map-links diff-table))]
                        [fname cnt]))))
          output? (seq fs)
          errors? (and (vector? (:result @publisher))
                       (some #(str/includes? % "Sushi: error")
                             (:result @publisher)))]

      [:div
       (cond
         @in-progress? [:span "FHIR publisher compiles fsh definitions. please wait."]

         errors?
         [:div
          [:h3 "Publishing failed"]
          [:div {:class (c [:text-sm])}
           (for [l (:result @publisher)]
             [:div {:style (when (str/includes? l "error")
                             {:color "red"})}
              l])]]

         output?
         [:div
          [:div
           (doall
            (for [[fname cnt] fs]
              [:div {:class (c [:py 1])}
               [:h4 fname]
               cnt]))]]

         :else [:span "publisher output not found. check logs tab"])])
    [:div [:span "fsh-dir is not set"]]))

;; TODO implement reactive page reloads via JS server sent events

(comment

  (def f (slurp "RuCoreIG/output/StructureDefinition-core-servicerequest.html"))

  (def tree (hickory/as-hiccup (hickory/parse f)))

  (sequential? tree)

  (rest tree)

  (def tbl (search-hiccup tree [:div {:id "tbl-diff"}]))

  (runner/exec {:env {} :exec ["sushi" "sushi-project"] :dir "."}))
