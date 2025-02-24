# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2025_02_24_053431) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "business_models", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_business_models_on_name", unique: true
  end

  create_table "buyer_members", force: :cascade do |t|
    t.bigint "buyer_id", null: false
    t.string "name", null: false
    t.string "role", null: false
    t.string "photo_url", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["buyer_id"], name: "index_buyer_members_on_buyer_id"
  end

  create_table "buyer_target_industries", force: :cascade do |t|
    t.bigint "buyer_id", null: false
    t.bigint "industry_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["buyer_id"], name: "index_buyer_target_industries_on_buyer_id"
    t.index ["industry_id"], name: "index_buyer_target_industries_on_industry_id"
  end

  create_table "buyers", force: :cascade do |t|
    t.string "name", null: false
    t.string "location", null: false
    t.text "about_us", null: false
    t.integer "investment_range_min", null: false
    t.integer "investment_range_max", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "deal_breakers", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_deal_breakers_on_name", unique: true
  end

  create_table "deal_structures", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_deal_structures_on_name", unique: true
  end

  create_table "deal_team_members", force: :cascade do |t|
    t.bigint "match_id", null: false
    t.string "name", null: false
    t.string "role", null: false
    t.string "photo_url", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["match_id"], name: "index_deal_team_members_on_match_id"
  end

  create_table "decision_making_styles", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_decision_making_styles_on_name", unique: true
  end

  create_table "growth_strategies", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_growth_strategies_on_name", unique: true
  end

  create_table "industries", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_industries_on_name", unique: true
  end

  create_table "innovation_styles", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_innovation_styles_on_name", unique: true
  end

  create_table "management_styles", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_management_styles_on_name", unique: true
  end

  create_table "matches", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "buyer_id", null: false
    t.string "progress", default: "new", null: false
    t.date "due_date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["buyer_id"], name: "index_matches_on_buyer_id"
    t.index ["user_id"], name: "index_matches_on_user_id"
  end

  create_table "preferred_work_cultures", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_preferred_work_cultures_on_name", unique: true
  end

  create_table "user_deal_breakers", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "deal_breaker_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["deal_breaker_id"], name: "index_user_deal_breakers_on_deal_breaker_id"
    t.index ["user_id"], name: "index_user_deal_breakers_on_user_id"
  end

  create_table "user_details", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "business_name", null: false
    t.bigint "industry_id", null: false
    t.string "annual_revenue"
    t.integer "number_of_employees"
    t.string "location"
    t.text "business_description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["industry_id"], name: "index_user_details_on_industry_id"
    t.index ["user_id"], name: "index_user_details_on_user_id"
  end

  create_table "user_preferred_work_cultures", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "preferred_work_culture_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["preferred_work_culture_id"], name: "idx_on_preferred_work_culture_id_dfdfedcffa"
    t.index ["user_id"], name: "index_user_preferred_work_cultures_on_user_id"
  end

  create_table "user_sessions", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "token", null: false
    t.datetime "expires_at", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["token"], name: "index_user_sessions_on_token", unique: true
    t.index ["user_id"], name: "index_user_sessions_on_user_id"
  end

  create_table "user_settings", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.integer "risk_tolerance", default: 0, null: false
    t.bigint "innovation_style_id", null: false
    t.bigint "decision_making_style_id", null: false
    t.bigint "growth_strategy_id", null: false
    t.bigint "management_style_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["decision_making_style_id"], name: "index_user_settings_on_decision_making_style_id"
    t.index ["growth_strategy_id"], name: "index_user_settings_on_growth_strategy_id"
    t.index ["innovation_style_id"], name: "index_user_settings_on_innovation_style_id"
    t.index ["management_style_id"], name: "index_user_settings_on_management_style_id"
    t.index ["user_id"], name: "index_user_settings_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email", null: false
    t.string "password_digest"
    t.string "role", default: "none", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "buyer_members", "buyers"
  add_foreign_key "buyer_target_industries", "buyers"
  add_foreign_key "buyer_target_industries", "industries"
  add_foreign_key "deal_team_members", "matches"
  add_foreign_key "matches", "buyers"
  add_foreign_key "matches", "users"
  add_foreign_key "user_deal_breakers", "deal_breakers"
  add_foreign_key "user_deal_breakers", "users"
  add_foreign_key "user_details", "industries"
  add_foreign_key "user_details", "users"
  add_foreign_key "user_preferred_work_cultures", "preferred_work_cultures"
  add_foreign_key "user_preferred_work_cultures", "users"
  add_foreign_key "user_sessions", "users"
  add_foreign_key "user_settings", "decision_making_styles"
  add_foreign_key "user_settings", "growth_strategies"
  add_foreign_key "user_settings", "innovation_styles"
  add_foreign_key "user_settings", "management_styles"
  add_foreign_key "user_settings", "users"
end
