class RemoveTypeFromPhotos < ActiveRecord::Migration
  def change
    remove_column :photos, :type, :string
  end
end
