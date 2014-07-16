class CategoriesSerializer < ActiveModel::CategorySerializer
  attributes :name
  has_many :bookmarks
end