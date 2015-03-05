class Stylist < ActiveRecord::Base
  validates :style, :education, :experience, :clients, :equipment, :rate, presence: true
 
  belongs_to :user

  after_create :get_zip


  def self.search(search)
  if search
    where('style LIKE ? AND education LIKE ? AND experience LIKE ? AND equipment LIKE ? AND zip LIKE ? AND rate LIKE ?', 
      "%#{search[:style]}%", "%#{search[:education]}%", "%#{search[:experience]}%", "%#{search[:equipment]}%", "%#{search[:zip]}%", "%#{search[:rate]}%")
  else
    self.all
  end
  end
 
 def get_zip
    self.user.update_zip
    self.save
  end

end
