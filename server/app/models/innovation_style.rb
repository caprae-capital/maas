class InnovationStyle < ApplicationRecord
  has_many :user_settings

  validates :name, presence: true, uniqueness: true
end
