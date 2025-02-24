class UserPreferredWorkCulture < ApplicationRecord
  belongs_to :user
  belongs_to :preferred_work_culture
end
