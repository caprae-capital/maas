class PreferredWorkCulture < ApplicationRecord
  has_many :user_preferred_work_cultures

  validates :name, presence: true, uniqueness: true
end
