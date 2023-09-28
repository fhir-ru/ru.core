(ns zd.fhir-ru
  (:require
   [cheshire.core :as json]
   [zen-web.core]
   [clojure.string :as str]
   [ring.middleware.cookies]
   [ring.util.codec :as codec]
   [org.httpkit.client :as http]
   [zd.core :as zd]
   [clojure.java.io :as io]
   [zd.fsh]
   [zen.core :as zen]))

(defn redirect [url]
  {:status 301
   :headers {"Location" url
             "Cache-Control" "no-store, no-cache, must-revalidate, post-check=0, pre-check=0"}})

(def oauth-config (when (.isDirectory (io/file "keystore"))
                    (let [cfg-file (io/file "keystore/oauth-config.edn")]
                      (when (.exists cfg-file)
                        (read-string (slurp cfg-file))))))

(def client-id (:client-id oauth-config))

(def client-secret (:client-secret oauth-config))

(defn google-login [ztx]
  (str "https://accounts.google.com/o/oauth2/v2/auth?"
       (codec/form-encode
        {:client_id client-id
         :redirect_uri (:redirect-uri @ztx)
         :scope (str/join " " ["https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/userinfo.profile"])
         :response_type "code",
         :access_type "offline",
         :prompt "consent"})))

(defn get-session [ztx sid]
  (get-in @ztx [:sessions sid]))

(defn do-login [ztx code]
  (let [data {:client_id client-id
              :client_secret client-secret
              :redirect_uri (:redirect-uri @ztx)
              :grant_type "authorization_code"
              :code code}
        resp (-> @(http/post "https://oauth2.googleapis.com/token" {:form-params data})
                 :body
                 (cheshire.core/parse-string keyword))]
    (if-let [token  (:access_token resp)]
      (let [guser (-> @(http/get "https://www.googleapis.com/oauth2/v1/userinfo" {:query-params {:access_token token}})
                      :body
                      (cheshire.core/parse-string keyword))
            id (first (str/split (:email guser) #"@"))
            user {:id id :name (:name guser) :email (:email guser) :photo (:picture id)}]
        (let [sid (str (java.util.UUID/randomUUID))]
          (println :session> sid user)
          (swap! ztx assoc-in [:sessions sid] user)
          (ring.middleware.cookies/cookies-response
           {:status 303
            :cookies {"dojo-session" sid}
            :headers {"Location" "/"}})))
      {:status 200
       :body (pr-str resp)})))

;; enable client_id, client_secret envs
;; change default port to 3333

(defmethod zen-web.core/middleware-in 'zd/auth
  [ztx cfg req & args]
  (let [u (:uri req)]
    (when (and (:auth @ztx)
               (or (str/includes? u "/edit")
                   (str/includes? u "/new")
                   (= (:request-method req) :delete)))
      (if-let [code (get-in req [:params :code])]
        {:zen-web.core/response (do-login ztx code)}
        (if-let [session (get-session ztx (get-in (ring.middleware.cookies/cookies-request req) [:cookies "dojo-session" :value]))]
          (assoc req :session session)
          {:zen-web.core/response (redirect (google-login ztx))})))))

(defonce dtx (atom nil))

(defn start! [& opts]
  (let [ztx (zen/new-context {})]
    (zen/read-ns ztx 'zd)
    (zen/read-ns ztx 'fhir-ru)
    (zen/start-system ztx 'fhir-ru/system)
    (reset! dtx ztx)
    ztx))

(defn -main [& opts]
  (start!))

(comment
  (def ztx (start!))

  (zd.core/stop ztx)
  )
