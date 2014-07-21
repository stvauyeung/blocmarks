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
    category = Category.find(params[:id])
    bookmarks = category.bookmarks
    bookmarks_categories = bookmarks.map { |bookmark| bookmark.as_json.merge(categories: bookmark.categories.as_json) }
    @category = category.as_json.merge(bookmarks: bookmarks_categories)
    render json: { category: @category }, root: false
  end

  private

  def category_param
    params.permit(:name, :bookmark_id)
  end
end