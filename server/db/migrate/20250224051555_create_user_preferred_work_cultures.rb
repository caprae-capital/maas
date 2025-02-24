class CreateUserPreferredWorkCultures < ActiveRecord::Migration[8.0]
  def change
    create_table :user_preferred_work_cultures do |t|
      t.references :user, null: false, foreign_key: true
      t.references :preferred_work_culture, null: false, foreign_key: true

      t.timestamps
    end
  end
end
