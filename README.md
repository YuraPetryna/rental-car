
RentalCar - Веб-додаток для оренди автомобілів

Цей проєкт є фронтенд частиною веб-додатку для компанії "RentalCar", що спеціалізується на оренді автомобілів. Метою додатка є надання зручного інтерфейсу для перегляду каталогу автомобілів, їх фільтрації, додавання до обраних та бронювання. Для реалізації функціоналу взаємодії з оголошеннями використовується готовий бекенд API.

Основні функції
Домашня сторінка: Містить банер з основним закликом до дії для переходу до каталогу.
Сторінка каталогу:
Відображення всіх доступних транспортних засобів.
Можливість фільтрації автомобілів за:
Брендом (один бренд).
Ціною (одна ціна).
Пробігом ("від" і "до", окремо або одночасно).
Можливість додавати автомобілі до списку обраних.
Реалізована пагінація за допомогою кнопки "Load More" для довантаження додаткових карток. Фільтрація та пагінація виконуються на бекенді.
Пробіг автомобіля відображається у форматі X XXX km (наприклад, 5 000 km).
Сторінка окремого автомобіля:
Детальний опис обраного автомобіля з фотографіями.
Форма для бронювання автомобіля.
При успішній відправці форми виводиться нотифікація.
Управління станом: Використання Redux для глобального стану, що включає список транспортних засобів, стан фільтрів та список обраних автомобілів (зберігається при оновленні сторінки). При застосуванні фільтрів, попередні результати пошуку скидаються.
Навігація: Інтуїтивно зрозумілі переходи між сторінками, включаючи перехід на сторінку каталогу з домашньої та на сторінку деталей автомобіля з картки в каталозі.
Використані технології
Фреймворк: React (з бандлером Vite)
Управління станом: Redux Toolkit, React Redux, Redux Thunk, Redux Persist
Маршрутизація: React Router (версія 7.5.0)
HTTP-запити: Axios
Стилізація: @emotion/react, @emotion/styled, @mui/material (Material-UI)
Форми: Formik, Yup (для валідації)
Вибір дати: React Datepicker
Вибір зі списку: React Select
Нотифікації: React Toastify
Інструменти розробки: ESLint
Ось текст для файлу README.md, який відповідає вашим вимогам та наданому ТЗ:

RentalCar - Веб-додаток для оренди автомобілів
Зміст
Про проєкт
Основні функції
Використані технології
Структура маршрутів
Встановлення та запуск
Використання
Демонстрація
Автор
Про проєкт
Цей проєкт є фронтенд частиною веб-додатку для компанії "RentalCar", що спеціалізується на оренді автомобілів. Метою додатка є надання зручного інтерфейсу для перегляду каталогу автомобілів, їх фільтрації, додавання до обраних та бронювання. Для реалізації функціоналу взаємодії з оголошеннями використовується готовий бекенд API.

Основні функції
Домашня сторінка: Містить банер з основним закликом до дії для переходу до каталогу.
Сторінка каталогу:
Відображення всіх доступних транспортних засобів.
Можливість фільтрації автомобілів за:
Брендом (один бренд).
Ціною (одна ціна).
Пробігом ("від" і "до", окремо або одночасно).
Можливість додавати автомобілі до списку обраних.
Реалізована пагінація за допомогою кнопки "Load More" для довантаження додаткових карток. Фільтрація та пагінація виконуються на бекенді.
Пробіг автомобіля відображається у форматі X XXX km (наприклад, 5 000 km).
Сторінка окремого автомобіля:
Детальний опис обраного автомобіля з фотографіями.
Форма для бронювання автомобіля.
При успішній відправці форми виводиться нотифікація.
Управління станом: Використання Redux для глобального стану, що включає список транспортних засобів, стан фільтрів та список обраних автомобілів (зберігається при оновленні сторінки). При застосуванні фільтрів, попередні результати пошуку скидаються.
Навігація: Інтуїтивно зрозумілі переходи між сторінками, включаючи перехід на сторінку каталогу з домашньої та на сторінку деталей автомобіля з картки в каталозі.
Використані технології
Фреймворк: React (з бандлером Vite)
Управління станом: Redux Toolkit, React Redux, Redux Thunk, Redux Persist
Маршрутизація: React Router (версія 7.5.0)
HTTP-запити: Axios
Стилізація: @emotion/react, @emotion/styled, @mui/material (Material-UI)
Форми: Formik, Yup (для валідації)
Вибір дати: React Datepicker
Вибір зі списку: React Select
Нотифікації: React Toastify
Інструменти розробки: ESLint
Структура маршрутів
/ - Домашня сторінка
/catalog - Сторінка каталогу
/catalog/:id - Сторінка окремого автомобіля (з детальним описом)

Використання
Відкрийте домашню сторінку.
Натисніть кнопку "View Catalog" для переходу до списку автомобілів.
Використовуйте фільтри для пошуку автомобілів за брендом, ціною та пробігом.
Натисніть "Load More", щоб завантажити більше автомобілів.
Натисніть "Read more" на картці автомобіля, щоб переглянути деталі та заповнити форму оренди.
Вибрані автомобілі зберігаються у локальному сховищі.
Демонстрація
Проєкт задеплоєно за посиланням:
https://rental-car-seven-henna.vercel.app/

Автор
Юрій Петрина

https://github.com/YuraPetryna/
https://www.linkedin.com/in/yura-petryna/
