Rails.application.routes.draw do
  root 'static_pages#index'

  namespace :api do
    get    'chats'                    => 'chats#index'
    post   'chats'                    => 'chats#create'
  end

  get '*path' => redirect('/')
end
