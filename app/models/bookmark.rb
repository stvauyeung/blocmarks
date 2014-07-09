class Bookmark < ActiveRecord::Base
  validates_presence_of :title, :description, :link, on: :create
  belongs_to :user
end