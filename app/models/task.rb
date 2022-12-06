class Task < ApplicationRecord
  validates :content, length: { maximum: 200 }, presence: true

  after_create :call_websocket

  private

  def call_websocket
    ActionCable.server.broadcast("task_homepage", { body: "This Room is Best Room." })
  end
end
