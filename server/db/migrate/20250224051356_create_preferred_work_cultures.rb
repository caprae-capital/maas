class CreatePreferredWorkCultures < ActiveRecord::Migration[8.0]
  def change
    create_table :preferred_work_cultures do |t|
      t.string :name, null: false

      t.timestamps
    end

    add_index :preferred_work_cultures, :name, unique: true
  end
end
