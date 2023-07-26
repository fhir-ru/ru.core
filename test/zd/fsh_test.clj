(ns zd.fsh-test
  (:require [clojure.test :refer [is deftest]]
            [clojure.java.io :as io]
            [zd.fsh :as fsh]
            [zen.core :as zen]
            [zd.fhir-ru]))

(defonce ztx (zen/new-context {}))

(comment
  (def ztx (zen/new-context {})))

(deftest system-config
  (is (empty? (zen/errors ztx))))

(defn load! []
  (is (= :zen/loaded (zen/read-ns ztx 'zd)))
  (is (= :zen/loaded (zen/read-ns ztx 'fhir-ru))))

(deftest fsh-files-generated
  (zen/stop-system ztx)

  (load!)

  (zen/start-system ztx 'fhir-ru/system)

  (is (not-empty (remove #(.isDirectory %) (.listFiles (io/file "RuCoreIG/input/fsh/")))))

  (await fsh/publisher)

  (is (not @fsh/in-progress?))

  (is (not-empty (.listFiles (io/file "RuCoreIG/output")))))
