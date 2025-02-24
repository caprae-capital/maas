class CreateManagementStyles < ActiveRecord::Migration[8.0]
  def change
    create_table :management_styles do |t|
      t.string :name, null: false

      t.timestamps
    end

    add_index :management_styles, :name, unique: true
  end
end
