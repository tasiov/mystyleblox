class Photo < ActiveRecord::Base
  validates :style, :education, :experience, :clients, :equipment, :rate, presence: true
  
  belongs_to :user
end
