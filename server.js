const http = require("http");
const requestHandler = (request, response) => {
    response.end("Hello! It is my first server.");
    };
const fs = require("fs");
fs.appendFileSync("hello.txt", "Новое сообщение в файле!");
fs.appendFile("hello.txt", "Привет МИР!", function(error){
    if(error) throw error; // если возникла ошибка
    console.log("Запись файла завершена. Содержимое файла:");
    let data = fs.readFileSync("hello.txt", "utf8");
    console.log(data); // выводим считанные данные
});
http.createServer(requestHandler).listen(13000);
