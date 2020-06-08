/* global __dirname */

const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.sendFile(`${__dirname}/index.html`);
});

app.get('/node', (request, response) => {
    response.sendFile(`${__dirname}/node.html`);
});

app.get('/angular', (request, response) => {
    response.sendFile(`${__dirname}/angular.html`);
});

app.get('/react', (request, response) => {
    response.sendFile(`${__dirname}/react.html`);
});

app.get('/vue', (request, response) => {
    response.sendFile(`${__dirname}/vue.html`);
});

app.listen(3000);
console.log('Запущен локальный сервер Node.js / порт: 3000');
