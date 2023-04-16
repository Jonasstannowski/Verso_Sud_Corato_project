Rails.application.routes.draw do
  resources :locations
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'locations#index'

  get '/general_manager', to: 'locations#edit'
  patch 'locations/:id', to: 'locations#update'
  
end
