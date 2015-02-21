class AddTypeToMale < ActiveRecord::Migration
  def change
    add_column :males, :type, :string
  end
end
