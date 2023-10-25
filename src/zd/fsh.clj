(ns zd.fsh
  (:require
   [zd.git :as git]
   [stylo.core :refer [c]]
   [clojure.walk :as walk]
   [zd.utils :as utils]
   [hickory.core :as hickory]
   [clojure.string :as str]
   [zd.methods :as methods]
   [clojure.java.io :as io]
   [zen.core :as zen])
  (:import [java.io StringReader]))

(def fsh-dir ["RuCoreIG" "RuLabIG"])

(defn dirpath [fsh-dir]
  (str (System/getProperty "user.dir") "/" fsh-dir))

(defn inputdir [fsh-dir]
  (str (dirpath fsh-dir) "/input/fsh/"))

(defmethod zen/op 'fhir-ru/fsh-init
  [ztx config ev & opts]
  (let [dirs (map inputdir fsh-dir)]
    (zen/pub ztx 'fhir-ru/on-fsh-init {:dirs dirs})
    ;; TODO impl index to delete fsh files
    (doseq [d dirs]
      (doall (->> (io/file d)
                  (.listFiles)
                  (remove #(.isDirectory %))
                  (map #(io/delete-file %)))))))

;; save fsh files for fhir ig
(defmethod zen/op 'fhir-ru/fsh-file-build
  [ztx config {ev-name :ev {dn :zd/docname :as doc} :params :as ev} & opts]
  (doseq [k (->> (:zd/view doc)
                 (filter (fn [[k anns]]
                           (= :fsh (:type anns))))
                 (map first))]
    (when (not (str/blank? (get doc k)))
        ;; TODO think if it is sane to use first by default
      (let [fsh-dir (or (:fsh/dir doc) (first fsh-dir))
            fp (str (inputdir fsh-dir) dn "_" (name k) ".fsh")]
        (.mkdirs (io/file (inputdir fsh-dir)))
        (spit fp (get doc k))
        (zen/pub ztx 'fhir-ru/on-fsh-compile {:dn dn :k k :fp fp})))))

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
  ;; get resource ids from fsh texts
  (let [ids (->> (-> (StringReader. d)
                     (io/reader)
                     (line-seq))
                 (filter #(or (str/starts-with? % "Id")
                              (str/starts-with? % "Instance: ")))
                 (map (fn [id]
                        (second (or (re-matches #"^Instance:\s*(\S+)" id)
                                    (re-matches #"^Id:\s*(\S+)" id)))))
                 (set))
          ;; read publisher's output and filter ids
        fs
        (->> fsh-dir
             (mapcat (fn [d]
                       (file-seq (io/file (str (dirpath d) "/output")))))
             (filter (fn [f]
                       (some (fn [id]
                               (str/includes? (.getName f) (str id ".html")))
                             ids)))
             (map (fn [f] [(.getName f) (.getAbsolutePath f) (slurp f)]))
             (map (fn [[fname p cnt]]
                      ;; parse publisher's output and render hiccup
                    (let [tr (first (filter #(vector? %) (hickory/as-hiccup (hickory/parse cnt))))
                          view (or (search-hiccup tr [:div {:id "tbl-diff"}])
                                   (search-hiccup tr [:table {:class "codes"}])
                                   (drop-while (fn [el]
                                                 (not (and (vector? el)
                                                           (= :div (first el)))))
                                               (search-hiccup tr [:div {:class "col-12"}])))
                          cnt (if (nil? view)
                                [:div (str fname " view is not implemented yet")]
                                (walk/postwalk map-links view))]
                      [fname p cnt]))))
        output? (seq fs)
        ;; TODO check errors in fhir ig folders
        errors []]
    [:div
     (cond
       (seq errors)
       [:div
        [:h3 "Publishing failed"]
        [:div {:class (c [:text-sm])}
         (for [l errors]
           [:div {:style (when (str/includes? l "error")
                           {:color "red"})}
            l])]]

       output?
       [:div
        [:div
         (doall
          (for [[fname p cnt] fs]
            [:div {:class (c [:pb 8])}
             [:div {:class (c [:pb 3])}
              (let [base (if (str/includes? p "RuCore")
                           "https://rucore.fhir.ru"
                           "https://rulab.fhir.ru")
                    res-id (last (str/split fname #"/"))]
                [:a {:href (str base "/" res-id) :target "_blank"}
                 fname])
              #_[:div {:class (c [:mx 1] [:text-xs])}
               (str "file://" p)
               #_(str "file://" (dirpath fsh-dir) "/output/" fname)]]
             cnt]))]]

       :else
       [:div
        (for [l (str/split d #"\n")]
          [:div l])])]))
