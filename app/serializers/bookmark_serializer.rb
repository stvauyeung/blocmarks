class BookmarkSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :link, :user_id
end
