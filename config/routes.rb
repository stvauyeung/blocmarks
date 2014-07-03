Blocmarks::Application.routes.draw do
  
  namespace :api, defaults: {format: :json} do

  end

  root to: 'static_pages#home'
  resources: :users, only: [:new, :create, :show]

end
