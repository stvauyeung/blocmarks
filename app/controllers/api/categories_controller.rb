class CategoriesController < ApplicationController
  def create
    
  end

  def show
    
  end

  private

  def category_param
    params.permit(:name)
  end
end