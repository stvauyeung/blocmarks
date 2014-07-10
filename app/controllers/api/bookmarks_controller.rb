class Api::BookmarksController < ApplicationController
  def create
    bookmark = Bookmark.create(bookmark_params)
    render nothing: true
  end

  private

  def bookmark_params
    params.permit(:link, :title, :description, :user_id)
  end
end