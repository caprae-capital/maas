class DealBreaker < ApplicationRecord
  has_many :user_deal_breakers

  validates :name, presence: true, uniqueness: true
end
