class AddAttachmentImageToFemales < ActiveRecord::Migration
  def self.up
    change_table :females do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :females, :image
  end
end
