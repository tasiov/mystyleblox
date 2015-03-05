class AddZipToMales < ActiveRecord::Migration
  def change
    add_column :males, :zip, :string
  end
end
