class CreateBuyerTargetIndustries < ActiveRecord::Migration[8.0]
  def change
    create_table :buyer_target_industries do |t|
      t.references :buyer, null: false, foreign_key: true
      t.references :industry, null: false, foreign_key: true

      t.timestamps
    end
  end
end
