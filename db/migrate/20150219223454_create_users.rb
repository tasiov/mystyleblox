class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.string :memberId
      t.string :city
      t.string :state
      t.string :zip
      t.text :description

      t.timestamps null: false
    end
  end
end
