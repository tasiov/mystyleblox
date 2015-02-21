class AddTypeToStylist < ActiveRecord::Migration
  def change
    add_column :stylists, :type, :string
  end
end
