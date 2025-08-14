class CreatePatients < ActiveRecord::Migration[7.1]
  def change
    create_table :patients do |t|
      t.string :name
      t.integer :age
      t.integer :pnumber
      t.string :operation
      t.string :payment
      t.integer :howmuch

      t.timestamps
    end
  end
end
