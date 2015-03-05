class SessionsController < ApplicationController
  def new
  end
  
  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      log_in user
      # Log ins to the appropriate users profile page.
      if !current_user.male.nil?
        redirect_to user.male
      elsif !current_user.female.nil?
        redirect_to user.female
      elsif !current_user.hair.nil?
        redirect_to user.hair
      elsif !current_user.photo.nil?
        redirect_to user.photo
      elsif !current_user.mua.nil?
        redirect_to user.mua
      elsif !current_user.stylist.nil?
        redirect_to user.stylist
      else
        redirect_to root_url
      end
    else
      flash.now[:error] = 'Email/Password combination is invalid!'
      render 'new'
    end
  end

  def destroy
  	log_out
  	redirect_to root_url
  end



end
