class CreateDealStructures < ActiveRecord::Migration[8.0]
  def change
    create_table :deal_structures do |t|
      t.string :name, null: false

      t.timestamps
    end

    add_index :deal_structures, :name, unique: true
  end
end
