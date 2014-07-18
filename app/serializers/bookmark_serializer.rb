class BookmarkSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :link, :user_id, :created_at
  has_many :categories
end
