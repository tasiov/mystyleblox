class CreateHairs < ActiveRecord::Migration
  def change
    create_table :hairs do |t|
      t.string :style
      t.string :education
      t.string :experience
      t.string :clients
      t.string :equipment
      t.integer :rate
      t.references :user, index: true

      t.timestamps null: false
    end
    add_foreign_key :hairs, :users
  end
end
