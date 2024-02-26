(ns zd.download-deps
  (:require
    [zd.core :refer [stop]]
    [zd.fhir-ru :refer [start!]]))


(defn -main []
  (let [ztx (start!)]
    (stop ztx)
    (System/exit 0)))
