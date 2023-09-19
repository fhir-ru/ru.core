(ns zd.fhir-ru
  (:require
   [zen-web.core]
   [zd.core :as zd]
   [clojure.java.io :as io]
   [zd.fsh]
   [zen.core :as zen]))

(defmethod zen-web.core/middleware-in 'zd/auth
  [ztx cfg req & args]
  )

(defonce dtx (atom nil))

(defn start! [& opts]
  (let [ztx (zen/new-context {})]
    (zen/read-ns ztx 'zd)
    (zen/read-ns ztx 'fhir-ru)
    (zen/start-system ztx 'zd/system)
    ztx))

(defn -main [& opts]
  (start!))

(comment
  (def ztx (start!))

  (zd.core/stop ztx)
  )
