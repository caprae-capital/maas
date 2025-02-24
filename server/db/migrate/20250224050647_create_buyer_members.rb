class CreateBuyerMembers < ActiveRecord::Migration[8.0]
  def change
    create_table :buyer_members do |t|
      t.references :buyer, null: false, foreign_key: true
      t.string :name, null: false
      t.string :role, null: false
      t.string :photo_url, null: false

      t.timestamps
    end
  end
end
