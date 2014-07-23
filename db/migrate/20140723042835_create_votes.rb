class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.references :user
      t.references :bookmark
      t.boolean :value
      t.timestamps
    end
  end
end
