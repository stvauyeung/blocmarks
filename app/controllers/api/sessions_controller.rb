require 'pry'

class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user] = user.id
      render nothing: true
    else
      render nothing: true
    end
  end
end