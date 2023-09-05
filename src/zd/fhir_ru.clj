(ns zd.fhir-ru
  (:require
   [zd.core :as zd]
   [clojure.java.io :as io]
   [zd.fsh]
   [zen.core :as zen]))

(defonce dtx (atom nil))

(defn start! [& opts]
  (let [ztx (zen/new-context {})]
    (zen/read-ns ztx 'zd)
    (zen/read-ns ztx 'fhir-ru)
    (zen/start-system ztx 'zd/system)
    ztx))

(comment
  (def ztx (start!))

  (zd.core/stop ztx)
  )
