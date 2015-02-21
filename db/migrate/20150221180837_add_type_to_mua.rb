class AddTypeToMua < ActiveRecord::Migration
  def change
    add_column :muas, :type, :string
  end
end
