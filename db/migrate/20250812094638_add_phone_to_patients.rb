class AddPhoneToPatients < ActiveRecord::Migration[7.1]
  def change
    add_column :patients, :phone, :string
  end
end
