class RemoveTypeFromStylists < ActiveRecord::Migration
  def change
    remove_column :stylists, :type, :string
  end
end
