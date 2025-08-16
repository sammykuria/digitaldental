class ChangeDateTypeInAccounts < ActiveRecord::Migration[7.1]
  def change
        change_column :accounts, :date, :string
  end
end
