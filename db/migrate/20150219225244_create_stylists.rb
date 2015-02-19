class CreateStylists < ActiveRecord::Migration
  def change
    create_table :stylists do |t|
      t.string :style
      t.string :education
      t.string :experience
      t.string :clients
      t.string :equipment
      t.integer :rate
      t.references :user, index: true

      t.timestamps null: false
    end
    add_foreign_key :stylists, :users
  end
end
