# Тестовое задание на Авито

1. Необходимо составить план тестирования для функциональности “Избранное” для трёх объявлений из разных категорий. Избранные объявления доступны со страницы: https://www.avito.ru/favorites
2. Автоматизация позитивного тест-кейса добавление в избранное с карточки объявления.

## Запуск автотестов на playwright
1. Склонировать данный репозиторий и перейти в директорию avito-qa

2. Установить зависимости
   - Системные: [Node.js](https://nodejs.org/en/download/package-manager) и [npm](https://docs.npmjs.com/cli/v8/commands/npm-install)
   - Проекта: `npm install` 

4. Прописать команды
Для запуска тестов:
```
npm run test
```
Для просмотра отчёта:
```
npm run test:report
``` 

Для запуска тестов в графическом интерфейсе:
```
npm run test:ui  
```
