class CreateFemales < ActiveRecord::Migration
  def change
    create_table :females do |t|
      t.string :height
      t.string :weight
      t.string :age
      t.string :hair_c
      t.string :hair_l
      t.string :eyes
      t.string :bust
      t.string :waist
      t.string :hips
      t.string :dress
      t.string :shoes
      t.string :skin
      t.string :tattoo
      t.string :pierce
      t.string :scar
      t.string :nudity
      t.string :experience
      t.integer :rate
      t.references :user, index: true

      t.timestamps null: false
    end
    add_foreign_key :females, :users
  end
end
