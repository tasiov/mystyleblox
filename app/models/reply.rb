class Reply < ActiveRecord::Base
  belongs_to :message

  def get_user_name(x)
    user = User.find_by(id:x)
    name = user.name
    return name
  end
end
