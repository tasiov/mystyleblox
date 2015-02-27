class ChangeRateFormatInMales < ActiveRecord::Migration
  def up
   change_column :males, :rate, :string
  end

  def down
   change_column :males, :rate, :integar
  end
end
