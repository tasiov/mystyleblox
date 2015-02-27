class ChangeRateFormatInHairs < ActiveRecord::Migration
  def up
   change_column :hairs, :rate, :string
  end

  def down
   change_column :hairs, :rate, :integar
  end
end
