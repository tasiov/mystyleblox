json.array!(@males) do |male|
  json.extract! male, :id, :height, :weight, :age, :hair_c, :hair_l, :eyes, :suit, :chest, :pant, :shoes, :skin, :tattoo, :pierce, :scar, :nudity, :experience, :rate, :user_id
  json.url male_url(male, format: :json)
end
