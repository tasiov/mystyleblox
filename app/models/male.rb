class Male < ActiveRecord::Base
  validates :height, :weight, :suit, :shoes
  belongs_to :user


  after_create :get_zip

  def self.search(search)
  	if search
  		where('height LIKE ? AND weight LIKE ? AND age LIKE ? AND hair_c LIKE ? AND hair_l LIKE ? AND eyes LIKE ? AND suit LIKE ? AND chest LIKE ? AND pant LIKE ? AND shoes LIKE ? AND skin LIKE ? AND tattoo LIKE ? AND pierce LIKE ? AND scar LIKE ? AND nudity LIKE ? AND style LIKE ? AND experience LIKE ? AND zip LIKE ? AND rate LIKE ?',
  			"%#{search[:height]}%", "%#{search[:weight]}%", "%#{search[:age]}%", "%#{search[:hair_c]}%", "%#{search[:hair_l]}%", "%#{search[:eyes]}%", "%#{search[:suit]}%", "%#{search[:chest]}%", "%#{search[:pant]}%",
  			"%#{search[:shoes]}%", "%#{search[:skin]}%", "%#{search[:tattoo]}%", "%#{search[:pierce]}%", "%#{search[:scar]}%", "%#{search[:nudity]}%", "%#{search[:style]}%", "%#{search[:experience]}%", "%#{search[:zip]}%", "%#{search[:rate]}%")
  	else
  		self.all
  	end
  end

  def get_zip
    self.user.update_zip
    self.save
  end
end
