class Message < ActiveRecord::Base

	belongs_to :sender, class_name: "User", primary_key: "sender_id"
	belongs_to :reciever, class_name: "User", primary_key: "reciever_id"

end


def get_user_name(x)

	user = User.find_by(id:x)

	name = user.name
	return name

end
