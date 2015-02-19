json.array!(@females) do |female|
  json.extract! female, :id, :height, :weight, :age, :hair_c, :hair_l, :eyes, :bust, :waist, :hips, :dress, :shoes, :skin, :tattoo, :pierce, :scar, :nudity, :experience, :rate, :user_id
  json.url female_url(female, format: :json)
end
