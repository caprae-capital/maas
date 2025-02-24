class CreateDealBreakers < ActiveRecord::Migration[8.0]
  def change
    create_table :deal_breakers do |t|
      t.string :name, null: false

      t.timestamps
    end

    add_index :deal_breakers, :name, unique: true
  end
end
