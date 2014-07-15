class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in? #add authorize here

  def current_user
    @current_user ||= User.find(cookies[:user]) if cookies[:user]
  end

  def logged_in?
    !!current_user
  end

  def authorize
    # check if current user
    # if not redirect_to root_path
    # Rails.logger.error "This person was denied"
  end
end