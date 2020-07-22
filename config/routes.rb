Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'podcast/index'
      get 'podcast/create'
      get 'podcast/show'
      get 'podcast/update'
      get 'podcast/destroy'
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'levkofa_pages#levkofa'
  match '*path', to: 'levkofa_pages#levkofa', via: :all
end
