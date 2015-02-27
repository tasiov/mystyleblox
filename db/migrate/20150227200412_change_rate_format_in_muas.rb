class ChangeRateFormatInMuas < ActiveRecord::Migration
  def up
   change_column :muas, :rate, :string
  end

  def down
   change_column :muas, :rate, :integar
  end
end
