class CreateUserDealBreakers < ActiveRecord::Migration[8.0]
  def change
    create_table :user_deal_breakers do |t|
      t.references :user, null: false, foreign_key: true
      t.references :deal_breaker, null: false, foreign_key: true

      t.timestamps
    end
  end
end
