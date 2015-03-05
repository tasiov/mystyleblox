class User < ActiveRecord::Base
	before_save {self.email = email.downcase}
	validates :name, :phone, :email, presence: true
	validates :name, length: {minimum: 6}
	validates :name, format: {with: /[a-zA-Z\\s]/, :message => "field is incorrect. Please enter your first and last name."}
	validates :phone, format: {with: /\(?[0-9]{3}\)?-[0-9]{3}-[0-9]{4}/, :message => "number must be valid. i.e xxx-xxx-xxxx"}
	validates :email, uniqueness: {case_sensitive: false}
	validates :email, format: {with: /\A[^@]+@[^@]+\z/, :message => "must be a valid email address."}

	
	
	has_one :client
	has_one :male
	has_one :female
	has_one :hair
	has_one :photo
	has_one :mua
	has_one :stylist

	has_secure_password

	has_many :unavailables
	has_many :images


	

	end
