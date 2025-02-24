class CreateInnovationStyles < ActiveRecord::Migration[8.0]
  def change
    create_table :innovation_styles do |t|
      t.string :name, null: false

      t.timestamps
    end

    add_index :innovation_styles, :name, unique: true
  end
end
