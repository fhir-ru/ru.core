(ns zd.fhir-ru-test
  (:require [clojure.test :refer [is deftest]]
            [zen.core :as zen]
            [zd.fhir-ru]))

(defonce ztx (zen/new-context {}))

(comment
  (def ztx (zen/new-context {})))

(deftest system-config
  (is (= :zen/loaded (zen/read-ns ztx 'zd)))
  (is (= :zen/loaded (zen/read-ns ztx 'fhir-ru)))
  (is (empty? (zen/errors ztx))))

(deftest test-system

  (zen/stop-system ztx)

  (is (= :zen/loaded (zen/read-ns ztx 'fhir-ru)))

  (zen/start-system ztx 'fhir-ru/system)

  (is :system-started)

  (zen/stop-system ztx)

  (is :system-stopped))
