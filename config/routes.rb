Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do 
      resources :podcasts, only: [:create]
    end
  end
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"
  root to: 'levkofa_pages#levkofa'
  get '*path', to: 'levkofa_pages#levkofa', via: :all
end
 