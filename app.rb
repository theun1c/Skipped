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

post '/api/calendar' do
  data = JSON.parse(request.body.read)
  $calendar_data[data['date']] = data['color']
end

# ручка для отладки и проверки хеша
# get '/api/data' do
#   $calendar_data.each do |date, color|
#     puts "#{date} - #{color}"
#   end

#   $calendar_data.to_json
# end


get '/api/data' do
  content_type :json 
  if $calendar_data.empty?
    {}.to_json
  else
    $calendar_data.to_json
  end
end  