class AddAttachmentMediaToUsers < ActiveRecord::Migration
  def self.up
    change_table :users do |t|
      t.attachment :media
    end
  end

  def self.down
    remove_attachment :users, :media
  end
end
