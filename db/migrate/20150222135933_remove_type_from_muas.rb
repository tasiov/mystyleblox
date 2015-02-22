class RemoveTypeFromMuas < ActiveRecord::Migration
  def change
    remove_column :muas, :type, :string
  end
end
