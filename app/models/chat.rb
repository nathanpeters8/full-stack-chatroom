class Chat < ApplicationRecord
  validates :message, length: { maximum: 280 }, presence: true
end
