class Api::BookmarksController < ApplicationController
  before_filter :authorize_json
  
  def create
    bookmark = current_user.bookmarks.create(bookmark_params)
    render nothing: true
  end

  def show
    @bookmark = Bookmark.find(params[:id])
    render json: @bookmark, root: false
  end

  private

  def bookmark_params
    params.permit(:link, :title, :description, :user_id)
  end
end