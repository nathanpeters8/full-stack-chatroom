json.chats do
  json.array! @chats do |chat|
    json.id         chat.id
    json.message    chat.message
    json.created_at chat.created_at
  end
end
