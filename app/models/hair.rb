class Hair < ActiveRecord::Base
  validates :style, :education, :experience, :clients, :equipment, :rate, :type, presence: true

  belongs_to :user
end
