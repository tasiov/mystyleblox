class ChangeRateFormatInFemales < ActiveRecord::Migration
  def up
   change_column :females, :rate, :string
  end

  def down
   change_column :females, :rate, :integar
  end
end
