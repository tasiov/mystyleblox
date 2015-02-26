class CreateUnavailables < ActiveRecord::Migration
  def change
    create_table :unavailables do |t|
      t.references :user, index: true
      t.string :date

      t.timestamps null: false
    end
    add_foreign_key :unavailables, :users
  end
end
