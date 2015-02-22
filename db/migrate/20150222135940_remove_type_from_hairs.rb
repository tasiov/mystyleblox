class RemoveTypeFromHairs < ActiveRecord::Migration
  def change
    remove_column :hairs, :type, :string
  end
end
