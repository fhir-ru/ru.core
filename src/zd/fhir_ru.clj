(ns zd.fhir-ru
  (:require
   [zd.api]
   [zd.fsh]
   [zen.core :as zen]))

(defn start [ztx]
  (zen/read-ns ztx 'fhir-ru)
  (zen/start-system ztx 'fhir-ru/system)
  (println :started)
  (println "http://localhost:8080"))

(defonce dtx (atom nil))

(defn -main [& opts]
  (let [ztx (zen/new-context {})]
    (reset! dtx ztx)
    (start ztx)))

(comment
  (def ztx (zen/new-context))

  (:zen/state @ztx)

  (start ztx)
  (zen/stop-system ztx))
