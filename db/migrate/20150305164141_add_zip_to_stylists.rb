class AddZipToStylists < ActiveRecord::Migration
  def change
    add_column :stylists, :zip, :string
  end
end
