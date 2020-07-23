if Rails.env == "production"
Rails.application.config.session_store :cookie_store, key: "_levkofa", domain: "levkofa.herokuapp.com" 
else 
    Rails.application.config.session_store :cookie_store, key: "_levkofa"
end