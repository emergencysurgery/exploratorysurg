class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :body
      t.integer :author_id, null: false
      t.integer :profile_id, null: false

      t.timestamps
    end
    add_index :posts, :author_id
    add_index :posts, :profile_id
  end
end
