class StaticPagesController < ApplicationController
  def index
  end
  # This allows us to render the different forms on one page
  # We are creating a new instance of these object
  def test
  	@male = Male.new
  	@female = Female.new
  	@photo = Photo.new
  	@hair = Hair.new
  	@mua = Mua.new
  	@stylist = Stylist.new
  	@client = Client.new 
  end

  def about
  end

  def contact
  end
end
