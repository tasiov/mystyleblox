class ChangeRateFormatInPhotos < ActiveRecord::Migration
  def up
   change_column :photos, :rate, :string
  end

  def down
   change_column :photos, :rate, :integar
  end
end
