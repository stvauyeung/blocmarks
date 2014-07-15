class BookmarkSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :link, :user_id, :created_at
  has_and_belongs_to_many :categories
end
