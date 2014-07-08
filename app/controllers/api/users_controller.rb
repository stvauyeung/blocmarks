class Api::UsersController < ApplicationController
  def create
    @user = User.create!(user_params)
    render nothing: true
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  private

  def user_params
    params.permit(:name, :email, :password, :password_confirmation)
  end
end