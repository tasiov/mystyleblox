class CreateClients < ActiveRecord::Migration
  def change
    create_table :clients do |t|
      t.string :company
      t.references :user, index: true

      t.timestamps null: false
    end
    add_foreign_key :clients, :users
  end
end
