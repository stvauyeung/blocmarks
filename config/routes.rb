Blocmarks::Application.routes.draw do
  
  namespace :api, defaults: {format: :json} do
    post '/login', to: 'sessions#create'
    get '/logout', to: 'sessions#destroy'
    post '/users', to: 'users#create'
    get '/users/:id', to: 'users#show'
    post '/bookmarks', to: 'bookmarks#create'
    post '/categories', to: 'categories#create'
    get '/categories/:id', to: 'categories#show'
  end

  root to: 'static_pages#home'
  get '/users/new', to: 'users#new'
  get '/login', to: 'sessions#new'
  get '/home', to: 'user_pages#home', as: 'home'
  get '/categories/:id', to: 'categories#show'
end
