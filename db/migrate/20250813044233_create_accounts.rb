class CreateAccounts < ActiveRecord::Migration[7.1]
  def change
    create_table :accounts do |t|
      t.string :type
      t.integer :date
      t.string :category
      t.integer :amount
      t.string :description

      t.timestamps
    end
  end
end
