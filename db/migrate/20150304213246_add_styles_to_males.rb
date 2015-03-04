class AddStylesToMales < ActiveRecord::Migration
  def change
    add_column :males, :style, :string
  end
end
