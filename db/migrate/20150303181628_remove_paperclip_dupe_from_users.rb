class RemovePaperclipDupeFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :file_file_name, :string
    remove_column :users, :file_content_type, :string
    remove_column :users, :file_file_size, :integer
    remove_column :users, :file_updated_at, :datetime
  end
end
