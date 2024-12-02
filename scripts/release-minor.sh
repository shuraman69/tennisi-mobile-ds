echo "Release started"

#!/bin/bash

# Чтение текущей версии из package.json
CURRENT_VERSION=$(jq -r '.version' "../package.json")

# Разделение версии на части (major.minor.patch)
IFS='.' read -r MAJOR MINOR PATCH <<< "$CURRENT_VERSION"

# Увеличение PATCH версии
MINOR=$((MINOR + 1))

# Формирование новой версии
NEW_VERSION="$MAJOR.$MINOR.0"

# Обновление package.json с новой версией
jq --arg newVersion "$NEW_VERSION" '.version = $newVersion' ../package.json > tmp.json && mv tmp.json ../package.json

echo "Version updated: $CURRENT_VERSION -> $NEW_VERSION"
