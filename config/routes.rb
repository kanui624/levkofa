Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'levkofa_pages#levkofa'
  match '*path', to: 'levkofa_pages#levkofa', via: :all
end
