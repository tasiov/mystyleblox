json.array!(@hairs) do |hair|
  json.extract! hair, :id, :style, :education, :experience, :clients, :equipment, :rate, :user_id
  json.url hair_url(hair, format: :json)
end
