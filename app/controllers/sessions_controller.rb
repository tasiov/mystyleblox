class SessionsController < ApplicationController
  def new
  end
  
  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      log_in user
      # Log ins to the appropriate users profile page.
    redirect_to current_user_profession(user)
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
