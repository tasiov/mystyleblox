class AddTypeToHair < ActiveRecord::Migration
  def change
    add_column :hairs, :type, :string
  end
end
