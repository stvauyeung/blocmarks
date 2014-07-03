class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user])
    if @user.save
      session[:user_id] = @user.user_id
      redirect_to root_path
    else
      flash[:error] = "Sorry, couldn't create your account."
      redirect_to new_users_path
    end
  end

  def show
    
  end
end