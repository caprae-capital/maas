class UserSetting < ApplicationRecord
  belongs_to :user
  belongs_to :innovation_style
  belongs_to :decision_making_style
  belongs_to :growth_strategy
  belongs_to :management_style
end
