class AddZipToHairs < ActiveRecord::Migration
  def change
    add_column :hairs, :zip, :string
  end
end
