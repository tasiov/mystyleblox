class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :style
      t.string :education
      t.string :experience
      t.string :clients
      t.string :equipment
      t.integer :rate
      t.references :user, index: true

      t.timestamps null: false
    end
    add_foreign_key :photos, :users
  end
end
