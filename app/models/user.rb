class User < ActiveRecord::Base
	has_one :client
	has_one :male
	has_one :female
	has_one :hair
	has_one :photo
	has_one :mua
	has_one :stylist
end
