class Male < ActiveRecord::Base
  validates :height, :weight, :age, :hair_c, :hair_l, :eyes, :suit, :chest, :pant, :shoes, :skin, :tattoo, :pierce, :scar, :nudity, :experience, :rate, presence: true
  belongs_to :user

end
