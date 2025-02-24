class CreateGrowthStrategies < ActiveRecord::Migration[8.0]
  def change
    create_table :growth_strategies do |t|
      t.string :name, null: false

      t.timestamps
    end

    add_index :growth_strategies, :name, unique: true
  end
end
