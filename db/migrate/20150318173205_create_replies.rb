class CreateReplies < ActiveRecord::Migration
  def change
    create_table :replies do |t|
      t.text :body
      t.references :message, index: true

      t.timestamps null: false
    end
    add_foreign_key :replies, :messages
  end
end
