class AddZipToFemales < ActiveRecord::Migration
  def change
    add_column :females, :zip, :string
  end
end
