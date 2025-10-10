require 'sinatra'
require 'sinatra/reloader' if development?

# Настройка MIME типов
configure do
  set :public_folder, 'public'
  mime_type :js, 'application/javascript'
  mime_type :css, 'text/css'
end

set :bind, '0.0.0.0'
set :port, 4567

$calendar_data = {}

get '/' do
  erb :index
end

