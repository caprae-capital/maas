class CreateMatches < ActiveRecord::Migration[8.0]
  def change
    create_table :matches do |t|
      t.references :user, null: false, foreign_key: true
      t.references :buyer, null: false, foreign_key: true
      t.string :progress, null: false, default: "new"
      t.date :due_date, null: false

      t.timestamps
    end
  end
end
