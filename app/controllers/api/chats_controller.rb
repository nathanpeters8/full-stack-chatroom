module Api
  class ChatsController < ApplicationController
    def index
      @chats = Chat.where('created_at > ?', 60.minutes.ago).order(created_at: :desc)
      render 'index', status: :ok
    end

    def create
      @chat = Chat.new(chat_params)

      return render 'bad_request', status: :bad_request unless @chat.save!

      render 'show', status: :ok
    end

    private

    def chat_params
      params.require(:chat).permit(:message, :name)
    end
  end
end
