(ns zd.fhir-cloud
  (:require [zd.fhir-ru]
            [zen.core :as zen]
            [zd.core :as zd]))

(defonce dtx (atom nil))

(defn start! [& opts]
  (let [ztx (zen/new-context {:zd/gitsync true})]
    (zen/read-ns ztx 'zd)
    (zen/read-ns ztx 'fhir-ru)
    (zen/start-system ztx 'fhir-ru/system)
    (swap! ztx assoc
           :redirect-uri "https://fhir.ru"
           :auth true)
    (reset! dtx ztx)
    ztx))

(defn -main [& opts]
  (start!))
