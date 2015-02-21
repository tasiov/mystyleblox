class AddTypeToFemale < ActiveRecord::Migration
  def change
    add_column :females, :type, :string
  end
end
