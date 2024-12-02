# Получение имени текущей ветки
CURRENT_BRANCH=$(git branch --show-current)

# Проверка, является ли текущая ветка main
if [ "$CURRENT_BRANCH" != "main" ]; then
  echo "Вы сейчас на другой ветке: $CURRENT_BRANCH"
  exit 1  # Завершаем выполнение скрипта с кодом ошибки
else
  echo "Вы находитесь на ветке main"
fi
