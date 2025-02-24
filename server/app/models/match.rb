class Match < ApplicationRecord
  belongs_to :user
  belongs_to :buyer
  has_many :deal_team_members
end
