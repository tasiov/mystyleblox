json.array!(@muas) do |mua|
  json.extract! mua, :id, :style, :education, :experience, :clients, :equipment, :rate, :user_id
  json.url mua_url(mua, format: :json)
end
