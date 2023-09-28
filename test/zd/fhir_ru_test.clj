(ns zd.fhir-ru-test
  (:require [clojure.test :refer [is deftest]]
            [zd.core :as zd]
            [zen.core :as zen]
            [zd.fhir-ru :as fhir-ru]))

(comment
  (def ztx (zen/new-context {})))

(deftest system-starts
  (def ztx (fhir-ru/start!))

  (is (= :zen/loaded (zen/read-ns ztx 'zd)))
  (is (= :zen/loaded (zen/read-ns ztx 'fhir-ru)))
  (is (empty? (zen/errors ztx)))

  (zen/stop-system ztx))
