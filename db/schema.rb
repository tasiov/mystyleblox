# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150304213332) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "clients", force: :cascade do |t|
    t.string   "company"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "clients", ["user_id"], name: "index_clients_on_user_id", using: :btree

  create_table "females", force: :cascade do |t|
    t.string   "height"
    t.string   "weight"
    t.string   "age"
    t.string   "hair_c"
    t.string   "hair_l"
    t.string   "eyes"
    t.string   "bust"
    t.string   "waist"
    t.string   "hips"
    t.string   "dress"
    t.string   "shoes"
    t.string   "skin"
    t.string   "tattoo"
    t.string   "pierce"
    t.string   "scar"
    t.string   "nudity"
    t.string   "experience"
    t.string   "rate"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "style"
  end

  add_index "females", ["user_id"], name: "index_females_on_user_id", using: :btree

  create_table "hairs", force: :cascade do |t|
    t.string   "style"
    t.string   "education"
    t.string   "experience"
    t.string   "clients"
    t.string   "equipment"
    t.string   "rate"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "hairs", ["user_id"], name: "index_hairs_on_user_id", using: :btree

  create_table "images", force: :cascade do |t|
    t.integer "user_id"
    t.string  "name"
    t.string  "picture"
  end

  add_index "images", ["user_id"], name: "index_images_on_user_id", using: :btree

  create_table "males", force: :cascade do |t|
    t.string   "height"
    t.string   "weight"
    t.string   "age"
    t.string   "hair_c"
    t.string   "hair_l"
    t.string   "eyes"
    t.string   "suit"
    t.string   "chest"
    t.string   "pant"
    t.string   "shoes"
    t.string   "skin"
    t.string   "tattoo"
    t.string   "pierce"
    t.string   "scar"
    t.string   "nudity"
    t.string   "experience"
    t.string   "rate"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "style"
  end

  add_index "males", ["user_id"], name: "index_males_on_user_id", using: :btree

  create_table "muas", force: :cascade do |t|
    t.string   "style"
    t.string   "education"
    t.string   "experience"
    t.string   "clients"
    t.string   "equipment"
    t.string   "rate"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "muas", ["user_id"], name: "index_muas_on_user_id", using: :btree

  create_table "photos", force: :cascade do |t|
    t.string   "style"
    t.string   "education"
    t.string   "experience"
    t.string   "clients"
    t.string   "equipment"
    t.string   "rate"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "photos", ["user_id"], name: "index_photos_on_user_id", using: :btree

  create_table "stylists", force: :cascade do |t|
    t.string   "style"
    t.string   "education"
    t.string   "experience"
    t.string   "clients"
    t.string   "equipment"
    t.string   "rate"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "stylists", ["user_id"], name: "index_stylists_on_user_id", using: :btree

  create_table "unavailables", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "unavailables", ["user_id"], name: "index_unavailables_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.string   "phone"
    t.string   "memberId"
    t.string   "city"
    t.string   "state"
    t.string   "zip"
    t.text     "description"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "password_digest"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_foreign_key "clients", "users"
  add_foreign_key "females", "users"
  add_foreign_key "hairs", "users"
  add_foreign_key "images", "users"
  add_foreign_key "males", "users"
  add_foreign_key "muas", "users"
  add_foreign_key "photos", "users"
  add_foreign_key "stylists", "users"
  add_foreign_key "unavailables", "users"
end
