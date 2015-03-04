class Photo < ActiveRecord::Base
  validates :style, :education, :experience, :clients, :equipment, :rate, presence: true
  
  belongs_to :user

  def self.search(search) 
  	if search
  		where('style LIKE ? AND education LIKE ? AND experience LIKE ? AND equipment LIKE ? AND rate LIKE ?', 
	  	"%#{search[:style]}%", "%#{search[:education]}%", "%#{search[:experience]}%", "%#{search[:equipment]}%", "%#{search[:rate]}%")
  	else
  		self.all
  	end
  end
 
end
