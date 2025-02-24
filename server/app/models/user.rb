class User < ApplicationRecord
  has_secure_password

  has_many :matches
  has_many :user_preferred_work_cultures
  has_many :user_deal_breakers
  has_one :user_details
  has_one :user_settings

  NO_ROLE = 'none'
  SELLER_ROLE = 'seller'
  ADMIN_ROLE = 'admin'

  VALID_ROLES = [NO_ROLE, SELLER_ROLE, ADMIN_ROLE].freeze

  validates :email, presence: true, uniqueness: true
  validates :role, presence: true
  validates :password, length: { minimum: 6 }, if: -> { password.present? }
  validate :role, inclusion: { in: VALID_ROLES }
end
