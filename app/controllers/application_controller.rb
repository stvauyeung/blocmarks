class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find(cookies[:user]) if cookies[:user] != ''
  end

  def logged_in?
    !!current_user
  end

  def authorize
    unless logged_in?
      redirect_to root_path
    end
  end

  def authorize_json
    unless logged_in?
      render json: { errors: "Unhappy face."}
    end
  end
end