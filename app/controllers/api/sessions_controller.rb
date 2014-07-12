class Api::SessionsController < ApplicationController
  def create
    params.permit(:email, :password)
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      cookies.permanent[:user] = user.id
      redirect_to home_path
    else
      render nothing: true
    end
  end

  def destroy
    cookies[:user] = nil
    redirect_to root_path
  end
end