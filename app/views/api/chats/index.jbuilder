json.chats do
  json.array! @chats do |chat|
    json.id         chat.id
    json.name       chat.name
    json.message    chat.message
    json.created_at chat.created_at
    json.ago        time_ago_in_words(chat.created_at)
  end
end
