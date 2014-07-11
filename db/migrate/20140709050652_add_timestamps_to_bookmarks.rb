class AddTimestampsToBookmarks < ActiveRecord::Migration
  def change
    change_table(:bookmarks) { |t| t.timestamps }
  end
end
