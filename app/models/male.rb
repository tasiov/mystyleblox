class Male < ActiveRecord::Base
  validates :height, :weight, :age, :hair_c, :hair_l, :eyes, :suit, :chest, :pant, :shoes, :skin, :tattoo, :pierce, :scar, :nudity, :experience, :rate, presence: true
  belongs_to :user


  def self.search(search)
  	if search
  		where('height LIKE ? AND weight LIKE ? AND age LIKE ? AND hair_c LIKE ? AND hair_l LIKE ? AND eyes LIKE ? AND suit LIKE ? AND chest LIKE ? AND pant LIKE ? AND shoes LIKE ? AND skin LIKE ? AND tattoo LIKE ? AND pierce LIKE ? AND scar LIKE ? AND nudity LIKE ? AND experience LIKE ? AND rate LIKE ?',
  			"%#{search[:height]}%", "%#{search[:weight]}%", "%#{search[:age]}%", "%#{search[:hair_c]}%", "%#{search[:hair_l]}%", "%#{search[:eyes]}%", "%#{search[:suit]}%", "%#{search[:chest]}%", "%#{search[:pant]}%",
  			"%#{search[:shoes]}%", "%#{search[:skin]}%", "%#{search[:tattoo]}%", "%#{search[:pierce]}%", "%#{search[:scar]}%", "%#{search[:nudity]}%", "%#{search[:experience]}%", "%#{search[:rate]}%")
  	else
  		self.all
  	end
  end
end
