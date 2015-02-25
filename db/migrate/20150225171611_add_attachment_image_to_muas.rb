class AddAttachmentImageToMuas < ActiveRecord::Migration
  def self.up
    change_table :muas do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :muas, :image
  end
end
