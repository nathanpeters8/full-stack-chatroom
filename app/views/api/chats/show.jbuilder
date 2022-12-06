json.chat do
  json.id         @chat.id
  json.message    @chat.message
  json.created_at @chat.created_at
end
