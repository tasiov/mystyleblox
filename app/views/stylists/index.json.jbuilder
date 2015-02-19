json.array!(@stylists) do |stylist|
  json.extract! stylist, :id, :style, :education, :experience, :clients, :equipment, :rate, :user_id
  json.url stylist_url(stylist, format: :json)
end
