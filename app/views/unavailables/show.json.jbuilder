json.array!(@unavailables) do |unavailable|
  json.extract! unavailable, :id, :user_id, :date
  json.url unavailable_url(unavailable, format: :json)
end
