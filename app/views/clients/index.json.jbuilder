json.array!(@clients) do |client|
  json.extract! client, :id, :company, :user_id
  json.url client_url(client, format: :json)
end
