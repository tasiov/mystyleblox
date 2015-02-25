class AddAttachmentImageToHairs < ActiveRecord::Migration
  def self.up
    change_table :hairs do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :hairs, :image
  end
end
