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

ActiveRecord::Schema.define(version: 20150219224908) do

  create_table "clients", force: :cascade do |t|
    t.string   "company"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "clients", ["user_id"], name: "index_clients_on_user_id"

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
    t.integer  "rate"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "females", ["user_id"], name: "index_females_on_user_id"

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
    t.integer  "rate"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "males", ["user_id"], name: "index_males_on_user_id"

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.string   "phone"
    t.string   "memberId"
    t.string   "city"
    t.string   "state"
    t.string   "zip"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

end
