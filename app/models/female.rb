class Female < ActiveRecord::Base
  validates :height, :weight, :age, :hair_c, :hair_l, :eyes, :bust, :waist, :hips, :dress, :shoes, :skin, :tattoo, :pierce, :scar, :nudity, :experience, :rate, presence: true
  belongs_to :user
end
