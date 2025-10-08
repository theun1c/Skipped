# Используем официальный Ruby образ
FROM ruby:3.2

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем Gemfile и Gemfile.lock
COPY Gemfile Gemfile.lock ./

# Устанавливаем зависимости
RUN bundle install

# Копируем остальные файлы проекта
COPY . .

# Открываем порт 4567
EXPOSE 4567

# Запускаем приложение "аналогично - bundle exec ruby app.rb -o 0.0.0.0"
CMD ["bundle", "exec", "ruby", "app.rb", "-o", "0.0.0.0"]
