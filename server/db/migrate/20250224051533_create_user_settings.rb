class CreateUserSettings < ActiveRecord::Migration[8.0]
  def change
    create_table :user_settings do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :risk_tolerance, null: false, default: 0
      t.references :innovation_style, null: false, foreign_key: true
      t.references :decision_making_style, null: false, foreign_key: true
      t.references :growth_strategy, null: false, foreign_key: true
      t.references :management_style, null: false, foreign_key: true

      t.timestamps
    end
  end
end
