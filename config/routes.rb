Blocmarks::Application.routes.draw do
  
  namespace :api, defaults: {format: :json} do
    post '/users', to: 'users#create'
    post '/login', to: 'sessions#create'
    get '/logout', to: 'sessions#destroy'
    get '/users/:id', to: 'users#show'
    post '/bookmarks', to: 'bookmarks#create'
  end

  root to: 'static_pages#home'
  get '/users/new', to: 'users#new'
  get '/login', to: 'sessions#new'
  get '/home', to: 'user_pages#home', as: 'home'
end
