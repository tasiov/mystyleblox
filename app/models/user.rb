class User < ActiveRecord::Base
	before_save {self.email = email.downcase}
	validates :name, :phone, :email, presence: true
	validates :name, length: {minimum: 6}
	validates :name, format: {with: /[a-zA-Z\\s]/, :message => "field is incorrect. Please enter your first and last name."}
	validates :phone, format: {with: /\(?[0-9]{3}\)?-[0-9]{3}-[0-9]{4}/, :message => "number must be valid. i.e xxx-xxx-xxxx"}
	validates :email, uniqueness: {case_sensitive: false}
	validates :email, format: {with: /\A[^@]+@[^@]+\z/, :message => "must be a valid email address."}
  validates :state, inclusion:{in: %w(AK AL AR AZ CA CO CT DE FL GA HI IA ID IL IN KS KY LA MA MD ME MI MN
  MO MS MT NC ND NE NH NJ NM NV NY OH OK OR PA RI SC SD TN TX UT VA VT WA WI WV WY), :message => "%{value} is not a valid US state"}
  validates :zip, length: {is: 5}
  validates :zip, numericality: true


	has_one :client, dependent: :destroy
	has_one :male, dependent: :destroy
	has_one :female, dependent: :destroy
	has_one :hair, dependent: :destroy
	has_one :photo, dependent: :destroy
	has_one :mua, dependent: :destroy
	has_one :stylist, dependent: :destroy

	has_secure_password

	has_many :unavailables, dependent: :destroy
	has_many :images, dependent: :destroy
  has_many :sent_messages, class_name: "Message", foreign_key: "sender_id", dependent: :destroy
  has_many :recieved_messages, class_name: "Message", foreign_key: "reciever_id", dependent: :destroy

	before_save :update_zip


	has_attached_file :image, styles: { large: "600x600>", medium: "300x300>", thumb: "150x150#" }, :default_url => "/images/:style/missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def update_zip
  if self.profession
  self.profession.zip = self.zip
  end
  end



  def profession
    if self.client
      self.client
    elsif self.female
      self.female
    elsif self.hair
      self.hair
    elsif self.male
      self.male
    elsif self.photo
      self.photo
    elsif self.mua
      self.mua
    elsif self.stylist
      self.stylist
    end
  end


end
