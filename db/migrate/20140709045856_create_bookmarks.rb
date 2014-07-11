class CreateBookmarks < ActiveRecord::Migration
  def change
    create_table :bookmarks do |t|
      t.string :title
      t.string :description
      t.string :link
      t.references :user, index: true
    end
  end
end
