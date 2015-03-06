class ChargesController < ApplicationController
  def new
  end

  def create
    # ammount in cents
    @amount = 50000

    customer = Stripe::Customer.create(
      :email => 'payments@mystyleblox.com',
      :card => params[:stripeToken]
      )

    charge = Stripe::Charge.create(
      :customer => customer.id,
      :amount => @amount,
      :description => 'Carrie\'s Customer',
      :currency => 'usd'
      )

  rescue Stripe::CardError => e
    flash[:error] = e.message
    redirect_to charges_path
  end
end
