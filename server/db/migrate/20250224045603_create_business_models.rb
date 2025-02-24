class CreateBusinessModels < ActiveRecord::Migration[8.0]
  def change
    create_table :business_models do |t|
      t.string :name, null: false

      t.timestamps
    end

    add_index :business_models, :name, unique: true
  end
end
