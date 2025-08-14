class Patient < ApplicationRecord
  validates :name, presence: true
  validates :age, presence: true, numericality: { only_integer: true, greater_than: 0 }
  validates :gender, presence: true
  validates :phone, presence: true, numericality: { only_integer: true }
  validates :operation, presence: true
  validates :payment, presence: true
  validates :howmuch, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
end