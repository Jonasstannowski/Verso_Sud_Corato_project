Rails.application.routes.draw do
  resources :locations
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'locations#index'

  get "locations/:id/edit", to: "locations#edit", :as => :general_manager
  patch "locations/:id", to: "locations#update"
end
