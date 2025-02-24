class Buyer < ApplicationRecord
  has_many :buyer_members
  has_many :buyer_target_industries
  has_many :matches
end
