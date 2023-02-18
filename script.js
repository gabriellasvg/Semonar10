// ДОМАШНЯЯ РАБОТА
// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.

// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).

const data = JSON.parse(dataInfo);
console.log(data);

const content = document.querySelector('.content');

data.forEach(element => {
    const contentBox = document.createElement('div');
    contentBox.style.color = 'blue'
    contentBox.style.border = '5px solid black';
    contentBox.style.backgroundColor = '#f8f8f8';
    contentBox.style.padding = '16px';
    contentBox.style.textAlign = 'center';
    contentBox.style.font = "40px Arial";
    const image = document.createElement('img');
    const setup = document.createElement('p');
    const punchline = document.createElement('p');
    const id = document.createElement('h1');

    image.src = element.image;
    setup.textContent = element.setup;
    punchline.textContent = element.punchline;
    id.textContent = element.id;

    content.appendChild(contentBox);
    contentBox.appendChild(id);
    contentBox.appendChild(setup);
    contentBox.appendChild(punchline);
    contentBox.appendChild(image);
});