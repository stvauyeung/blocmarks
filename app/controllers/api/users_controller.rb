class Api::UsersController < ApplicationController
  def create
    @user = User.create!(user_params)
    cookies.permanent[:user] = @user.id
    flash[:success] = "User successfully created."
    render nothing: true
  end

  def show
    @user = User.find(params[:id])
    render json: @user, root: false
  end

  private

  def user_params
    params.permit(:name, :email, :password, :password_confirmation)
  end
end