class AddZipToMuas < ActiveRecord::Migration
  def change
    add_column :muas, :zip, :string
  end
end
