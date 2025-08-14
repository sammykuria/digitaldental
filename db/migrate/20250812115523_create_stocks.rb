class CreateStocks < ActiveRecord::Migration[7.1]
  def change
    create_table :stocks do |t|
      t.string :itemname
      t.integer :quantity
      t.integer :price
      t.integer :date

      t.timestamps
    end
  end
end
