App::Application.routes.draw do
  root to: 'app#show'

  get '/restaurants/:id' => 'app#show'

  mount API::Root => '/api'
end
