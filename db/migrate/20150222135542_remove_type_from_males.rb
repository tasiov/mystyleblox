class RemoveTypeFromMales < ActiveRecord::Migration
  def change
    remove_column :males, :type, :string
  end
end
