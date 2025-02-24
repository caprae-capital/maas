class CreateUserDetails < ActiveRecord::Migration[8.0]
  def change
    create_table :user_details do |t|
      t.references :user, null: false, foreign_key: true
      t.string :business_name, null: false
      t.references :industry, null: false, foreign_key: true
      t.string :annual_revenue
      t.integer :number_of_employees
      t.string :location
      t.text :business_description

      t.timestamps
    end
  end
end
