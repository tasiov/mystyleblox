class User < ActiveRecord::Base
	before_save {self.email = email.downcase}
	validates :name, :phone, :email, presence: true
	validates :name, length: {minimum: }
	validates :email, uniqueness: {case_sensitive: false}
	validates :email, format: {with: /\A[^@]+@[^@]+\z/}

	has_one :client
	has_one :male
	has_one :female
	has_one :hair
	has_one :photo
	has_one :mua
	has_one :stylist
end
