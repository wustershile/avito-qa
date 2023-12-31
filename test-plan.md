#  Тест план

## История изменений документа

| Дата       | Версия | Автор изменений | Описание изменений |
| -----------|--------|-----------------|--------------------|
| 30.08.2023 | 1      | Намаконова В.В. | Создание документа |

## Введение

Данный документ описывает план тестирования функциональности вкладки "Избранное" для неавторизованного пользователя для трёх любых объявлений из разных категорий на сайте avito.ru. Вкладка "Избранное" позволяет сохранить понравившиеся объявления и вернуться к ним позже. Требуется проверить только Desktop-версию сайта в браузере Chrome последней стабильной версии.

## Объекты тестирования

1. Кнопка "Добавить в избранное" на странице объявления;
2. Кнопка "Добавить в избранное" со страницы поиска;
3. Кнопка "Добавить в избранное" со страницы объявления наверху страницы (при ширине окна браузера < 1334 пикс и скролле вниз).

## Проблемы и риски

1. Недостаток кадров для полноценного тестирования всей функциональности;
2. Отсутствие документации, на которую можно опереться при составлении тест-кейсов;
3. Отсутствие необходимого опыта у тестировщика.

## Функции, которые нужно протестировать

1. Добавление в избранное;
2. Переход на страницу "Избранное" через кнопку "Избранное" в шапке (в navbar);
3. Переход на страницу "Избранное" через ссылку в поповере "Добавлено в избранное";
4. Фильтры и сортировка на странице "Избранное";
5. Удаление из избранного.

## Функции, которые не будут тестироваться

1. Подкатегории раздела "Избранное": "Подборки", "Поиски", "Сравнения", "Профили";
2. Добавление объявлений в избранное от авторизованного пользователя;
3. Вёрстка;
4. Элементы интерфейса карточки объявления, не относящиеся к функциональности "Избранное".

## Используемые инструменты

1. ОС: Fedora Linux 38;
2. Браузер: Google Chrome 115.0.5790.170;
3. ПО: Playwright, JavaScript (Node.js);
4. Техническое задание: доступно по [ссылке](https://drive.google.com/file/d/1rChPu0oRy6o7bfmDc2dp4eP73RioC5W5/view?pli=1).

## Критерии начала тестирования

1. Получена документация (техническое задание);
2. Проанализированы все требования к тестируемому объекту;
3. Настроено окружение;
4. Составлены тест-кейсы.

## Критерии окончания тестирования

1. Проведены все запланированные тесты;
2. Заведены баг-репорты;
2. Устранены все дефекты с высоким Severity и priority.

## Сроки тестирования

24.08.2023—31.08.2023