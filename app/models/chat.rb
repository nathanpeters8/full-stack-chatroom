class Chat < ApplicationRecord
  validates :message, length: { maximum: 280 }, presence: true

  after_create :call_websocket

  private

  def call_websocket
    ActionCable.server.broadcast("chat_homepage", { body: "This Room is Best Room." })
  end
end
