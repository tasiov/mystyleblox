json.array!(@photos) do |photo|
  json.extract! photo, :id, :style, :education, :experience, :clients, :equipment, :rate, :user_id
  json.url photo_url(photo, format: :json)
end
