class Message < ActiveRecord::Base

	belongs_to :sender, class_name: "User", primary_key: "sender_id"
	belongs_to :reciever, class_name: "User", primary_key: "reciever_id"
  has_many :replies

  def get_user_name(x)

  	user = User.find_by(id:x)

  	name = user.name

  	return name
  end

  def sender
    User.find(sender_id)
  end
  def reciever
    User.find(reciever_id)
  end
  # def self.of_user(user)
  #   messages = where(sender_id: user)
  #   messages.push(where(reciever_id: user))
  #   messages.flatten
  # end
end
