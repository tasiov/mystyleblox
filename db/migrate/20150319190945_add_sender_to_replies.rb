class AddSenderToReplies < ActiveRecord::Migration
  def change
    add_column :replies, :sender, :string
  end
end
