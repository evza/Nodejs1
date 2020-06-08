/* global __dirname, __filename */

const fs = require('fs')  // - модуль для работы с файловыми потоками
let message = fs.readFileSync('Nodejs.txt', 'utf8');
console.log(message);
let current_time = (new Date()).toLocaleString();
let answer = `${current_time} -> Получено сообщение :: ${message}`;
fs.writeFileSync('report.txt', answer);
console.log('Отчет сохранен');







