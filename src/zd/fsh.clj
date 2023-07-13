(ns zd.fsh
  (:require
   [cheshire.core :as json]
   [clojure.string :as str]
   [zd.runner :as runner]
   [clojure.pprint :as pprint]
   [zd.methods :as methods]
   [clojure.java.io :as io]
   [zen.core :as zen]))

(defmethod zen/op 'fhir-ru/fsh-build
  [ztx config {ev-name :ev {{dn :docname :as m} :zd/meta :as doc} :params :as ev} & opts]
  (let [zd-config (zen/get-symbol ztx (:config config))]
    (doseq [k (filter (fn [k]
                        (= :fsh (get-in m [:ann k :zd/content-type])))
                      (:doc m))]
      (let [fp (str (:fsh-dir zd-config) "/input/fsh/" dn "_" (name k) ".fsh")
            _ (spit fp (get doc k))
            out (runner/exec {:env {} :exec ["sushi" "sushi-project"] :dir "."})]
        (zen/pub ztx 'fhir-ru/on-fsh-compile {:dn dn :k k :fp fp :out (:stdout out)})

        #_(prn (:stdout (runner/exec {:env {} :exec ["sushi" (:fsh-dir zd-config) :dir "."]})))
        #_(println)
        #_(prn zd-config)
        #_(prn fp)))))

(defmethod methods/rendercontent :fsh
  [ztx ctx block]
  [:div
   (when-let [fs (->> (file-seq (io/file "sushi-project/fsh-generated/resources"))
                      (filter (fn [f] (str/includes? (.getName f) ".json")))
                      (not-empty))]
     (doall
      (for [f fs]
        (let [cnt (json/parse-string (slurp f))]
          [:div
           [:h3 (.getName f)]
           [:pre (with-out-str (pprint/pprint cnt))]]))))])

(comment
  (runner/exec {:env {} :exec ["sushi" "sushi-project"] :dir "."}))
