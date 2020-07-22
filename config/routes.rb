Rails.application.routes.draw do
  root 'levkofa_pages#levkofa'

  namespace :api do
    namespace :v1 do
      resources :podcast
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
 
  get '*path', to: 'levkofa_pages#levkofa', via: :all
end
