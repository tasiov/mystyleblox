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

ActiveRecord::Schema.define(version: 20150307194444) do

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
    t.string   "zip"
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
    t.string   "zip"
  end

  add_index "hairs", ["user_id"], name: "index_hairs_on_user_id", using: :btree

  create_table "images", force: :cascade do |t|
    t.integer "user_id"
    t.string  "name"
    t.string  "picture"
  end

  add_index "images", ["user_id"], name: "index_images_on_user_id", using: :btree

  create_table "mailboxer_conversation_opt_outs", force: :cascade do |t|
    t.integer "unsubscriber_id"
    t.string  "unsubscriber_type"
    t.integer "conversation_id"
  end

  add_index "mailboxer_conversation_opt_outs", ["conversation_id"], name: "index_mailboxer_conversation_opt_outs_on_conversation_id", using: :btree
  add_index "mailboxer_conversation_opt_outs", ["unsubscriber_id", "unsubscriber_type"], name: "index_mailboxer_conversation_opt_outs_on_unsubscriber_id_type", using: :btree

  create_table "mailboxer_conversations", force: :cascade do |t|
    t.string   "subject",    default: ""
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  create_table "mailboxer_notifications", force: :cascade do |t|
    t.string   "type"
    t.text     "body"
    t.string   "subject",              default: ""
    t.integer  "sender_id"
    t.string   "sender_type"
    t.integer  "conversation_id"
    t.boolean  "draft",                default: false
    t.string   "notification_code"
    t.integer  "notified_object_id"
    t.string   "notified_object_type"
    t.string   "attachment"
    t.datetime "updated_at",                           null: false
    t.datetime "created_at",                           null: false
    t.boolean  "global",               default: false
    t.datetime "expires"
  end

  add_index "mailboxer_notifications", ["conversation_id"], name: "index_mailboxer_notifications_on_conversation_id", using: :btree
  add_index "mailboxer_notifications", ["notified_object_id", "notified_object_type"], name: "index_mailboxer_notifications_on_notified_object_id_and_type", using: :btree
  add_index "mailboxer_notifications", ["sender_id", "sender_type"], name: "index_mailboxer_notifications_on_sender_id_and_sender_type", using: :btree
  add_index "mailboxer_notifications", ["type"], name: "index_mailboxer_notifications_on_type", using: :btree

  create_table "mailboxer_receipts", force: :cascade do |t|
    t.integer  "receiver_id"
    t.string   "receiver_type"
    t.integer  "notification_id",                            null: false
    t.boolean  "is_read",                    default: false
    t.boolean  "trashed",                    default: false
    t.boolean  "deleted",                    default: false
    t.string   "mailbox_type",    limit: 25
    t.datetime "created_at",                                 null: false
    t.datetime "updated_at",                                 null: false
  end

  add_index "mailboxer_receipts", ["notification_id"], name: "index_mailboxer_receipts_on_notification_id", using: :btree
  add_index "mailboxer_receipts", ["receiver_id", "receiver_type"], name: "index_mailboxer_receipts_on_receiver_id_and_receiver_type", using: :btree

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
    t.string   "zip"
  end

  add_index "males", ["user_id"], name: "index_males_on_user_id", using: :btree

  create_table "messages", force: :cascade do |t|
    t.integer  "sender_id"
    t.integer  "reciever_id"
    t.string   "title"
    t.string   "body"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

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
    t.string   "zip"
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
    t.string   "zip"
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
    t.string   "zip"
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
  add_foreign_key "mailboxer_conversation_opt_outs", "mailboxer_conversations", column: "conversation_id", name: "mb_opt_outs_on_conversations_id"
  add_foreign_key "mailboxer_notifications", "mailboxer_conversations", column: "conversation_id", name: "notifications_on_conversation_id"
  add_foreign_key "mailboxer_receipts", "mailboxer_notifications", column: "notification_id", name: "receipts_on_notification_id"
  add_foreign_key "males", "users"
  add_foreign_key "muas", "users"
  add_foreign_key "photos", "users"
  add_foreign_key "stylists", "users"
  add_foreign_key "unavailables", "users"
end
