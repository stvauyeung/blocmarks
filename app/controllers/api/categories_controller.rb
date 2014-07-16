class Api::CategoriesController < ApplicationController
  def create
    bookmark = Bookmark.find(params[:bookmark_id])
    category = Category.find_by_name(params[:name])
    if category
      bookmark.categories << category
      bookmark.save!
    else
      bookmark.categories.create(name: params[:name])
    end 
    render nothing: true
  end

  def show
    
  end

  private

  def category_param
    params.permit(:name, :bookmark_id)
  end
end