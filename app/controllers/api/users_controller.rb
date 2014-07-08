class Api::UsersController < ApplicationController
  def create
    @user = User.create!(user_params)
    render nothing: true
  end

  def show
    # Not totally sure about this...still getting used to rails 4.
    params.permit(:id)
    # Query to find the user
    @user = User.find_by_id(params[:id])
    render json: @user, root: false
    # Root false is too hard to explain in comments. I'll followup with an explanation
    # when I have a little more time.
  end

  private

  def user_params
    params.permit(:name, :email, :password, :password_confirmation)
  end
end