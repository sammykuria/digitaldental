class AddGenderToPatients < ActiveRecord::Migration[7.1]
  def change
    add_column :patients, :gender, :string
  end
end
