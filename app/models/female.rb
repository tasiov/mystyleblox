class Female < ActiveRecord::Base
  validates :height, :weight, :age, :hair_c, :hair_l, :eyes, :bust, :waist, :hips, :dress, :shoes, :skin, :tattoo, :pierce, :scar, :nudity, :experience, :rate, presence: true
  belongs_to :user

  after_create :get_zip

  def self.search(search)
  	if search
  		where('height LIKE ? AND weight LIKE ? AND age LIKE ? AND hair_c LIKE ? AND hair_l LIKE ? AND eyes LIKE ? AND bust LIKE ? AND waist LIKE ? AND hips LIKE ? AND dress LIKE ? AND shoes LIKE ? AND skin LIKE ? AND zip LIKE ? AND tattoo LIKE ? AND pierce LIKE ? AND scar LIKE ? AND nudity LIKE ? AND style LIKE ? AND experience LIKE ? AND rate LIKE ?',
  			"%#{search[:height]}%", "%#{search[:weight]}%", "%#{search[:age]}%", "%#{search[:hair_c]}%", "%#{search[:hair_l]}%", "%#{search[:eyes]}%", "%#{search[:bust]}%", "%#{search[:waist]}%", "%#{search[:hips]}%", "%#{search[:dress]}%",
  			"%#{search[:shoes]}%", "%#{search[:skin]}%", "%#{search[:zip]}%", "%#{search[:tattoo]}%", "%#{search[:pierce]}%", "%#{search[:scar]}%", "%#{search[:nudity]}%", "%#{search[:style]}%", "%#{search[:experience]}%", "%#{search[:rate]}%")
  	else
  		self.all
  	end
  end

  def get_zip
    self.user.update_zip
    self.save
  end
end
