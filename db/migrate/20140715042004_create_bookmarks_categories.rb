class CreateBookmarksCategories < ActiveRecord::Migration
  def change
    create_table :bookmarks_categories, id: false do |t|
      t.belongs_to :bookmark
      t.belongs_to :category
    end
  end
end
