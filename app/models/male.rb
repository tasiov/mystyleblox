class Male < ActiveRecord::Base
  validates :height, :weight, :age, :hair_c, :hair_l, :eyes, :suit, :chest, :pant, :shoes, :skin, :tattoo, :pierce, :scar, :nudity, :experience, :rate, presence: true
  belongs_to :user
  has_many :images
  has_attached_file :image, styles: { large: "600x600>", medium: "300x300", thumb: "150x150#"}
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
