class CreateDecisionMakingStyles < ActiveRecord::Migration[8.0]
  def change
    create_table :decision_making_styles do |t|
      t.string :name, null: false

      t.timestamps
    end

    add_index :decision_making_styles, :name, unique: true
  end
end
