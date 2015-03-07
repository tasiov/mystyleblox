Rails.configuration.stripe = {
  :publishable_key => ENV['pk_test_nR7jajzWf6KpqxTgkp607Tcv'],
  :secret_key      => ENV['sk_test_Zxh5nsuUAo9utOmbur0Go73i']
}

Stripe.api_key = Rails.configuration.stripe[:secret_key]