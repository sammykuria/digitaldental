class CreateDashboards < ActiveRecord::Migration[7.1]
  def change
    create_table :dashboards do |t|
      t.string :name
      t.string :gender
      t.integer :mobile
      t.integer :age

      t.timestamps
    end
  end
end
