class Industry < ApplicationRecord
  has_many :buyer_target_industries

  validates :name, presence: true, uniqueness: true
end
