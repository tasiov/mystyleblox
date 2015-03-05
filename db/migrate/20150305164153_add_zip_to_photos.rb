class AddZipToPhotos < ActiveRecord::Migration
  def change
    add_column :photos, :zip, :string
  end
end
