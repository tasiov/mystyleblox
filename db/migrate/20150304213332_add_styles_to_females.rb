class AddStylesToFemales < ActiveRecord::Migration
  def change
    add_column :females, :style, :string
  end
end
