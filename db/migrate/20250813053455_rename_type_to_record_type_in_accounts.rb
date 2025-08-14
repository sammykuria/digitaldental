class RenameTypeToRecordTypeInAccounts < ActiveRecord::Migration[7.1]
  def change
        rename_column :accounts, :type, :record_type
  end
end
