# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and
some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)
  uses [SWC](https://swc.rs/) for Fast Refresh

Каталог: сторінка, де відображаються всі доступні транспортні засоби з
можливістю фільтрації за певними критеріями (локація, тип транспорту, наявність
кондиціонера, кухні тощо) та можливістю додати кемпер до обраних.

Сторінка окремого кемпера: сторінка з детальним описом обраного кемпера,
галереєю фотографій, відгуками користувачів, формою для бронювання. За
замовчуванням активна вкладка Features і відображається її вміст, але є
можливість перемкнутись на вкладку Reviews. Для опиcу характеристик використовуй
наступні властивості, якщо вони присутні на данному кемпері: transmission,
engine, AC, bathroom, kitchen, TV, radio, refrigerator, microwave, gas, water.
Для опиcу деталей використовуй наступні властивості: form, length, width,
height, tank, consumption.

Основні його ендпоінти:

GET /campers для отримання всіх оголошень (фільтрація обов’язково має
виконуватися на бекенді, не на фронті) GET /campers/:id для отримання деталей
оголошення за його ID

3. Маршрутизація:

/ - Домашня сторінка. /catalog - Сторінка каталогу. /catalog/:id- Сторінка
окремого кемпера.
