class CreateBuyers < ActiveRecord::Migration[8.0]
  def change
    create_table :buyers do |t|
      t.string :name, null: false
      t.string :location, null: false
      t.text :about_us, null: false
      t.integer :investment_range_min, null: false
      t.integer :investment_range_max, null: false

      t.timestamps
    end
  end
end
