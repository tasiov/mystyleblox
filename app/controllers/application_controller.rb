class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  include SessionsHelper

  private
  def current_user_profession(user)
    if !current_user.male.nil?
        user.male
      elsif !current_user.female.nil?
        user.female
      elsif !current_user.hair.nil?
        user.hair
      elsif !current_user.photo.nil?
        user.photo
      elsif !current_user.mua.nil?
        user.mua
      elsif !current_user.stylist.nil?
        user.stylist
      elsif !current_user.client.nil?
        user.client
      else
        root_url
      end
  end
end


