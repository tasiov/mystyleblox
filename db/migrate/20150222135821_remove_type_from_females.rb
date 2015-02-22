class RemoveTypeFromFemales < ActiveRecord::Migration
  def change
    remove_column :females, :type, :string
  end
end
