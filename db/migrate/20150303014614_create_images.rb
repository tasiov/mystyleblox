class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.references :user, index: true
      t.string :name
    end
    add_foreign_key :images, :users
  end
end
