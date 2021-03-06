Rails.application.routes.draw do
  resources :replies

  resources :messages do
    resources :replies
  end


  post 'image/create'

  get 'image/show'

  delete 'image/destroy'

  resources :unavailables

  get 'sessions/new'

  root 'static_pages#index'

  get 'signup' => 'users#new'

  get 'static_pages/about'

  get 'static_pages/contact'


  get '/talent' => "static_pages#all_talent_forms_page"

  get 'inbox' => 'messages#inbox'

  post '/current_user' => 'users#take_to_show', as: :profile

  resources :stylists

  resources :muas

  resources :hairs

  resources :photos

  resources :females

  resources :males

  resources :clients

  resources :images

  resources :charges

  resources :users do
    resources :stylists
    resources :muas
    resources :hairs
    resources :photos
    resources :females
    resources :males
    resources :clients
    resources :images
  end




  get 'login' => 'sessions#new'

  post 'login' => 'sessions#create'

  delete 'logout' => 'sessions#destroy'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
