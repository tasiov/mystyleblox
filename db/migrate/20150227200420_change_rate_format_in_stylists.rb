class ChangeRateFormatInStylists < ActiveRecord::Migration
  def up
   change_column :stylists, :rate, :string
  end

  def down
   change_column :stylists, :rate, :integar
  end
end
