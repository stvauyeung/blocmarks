class StaticPagesController < ApplicationController
  def home
    if current_user
      redirect_to home_path
    end
  end
end