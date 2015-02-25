class AddAttachmentImageToMales < ActiveRecord::Migration
  def self.up
    change_table :males do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :males, :image
  end
end
