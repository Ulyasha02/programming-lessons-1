const http = require("http");

const requestHandler = (request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    if(request.url === "/home" || request.url === "/"){
        response.write("<h2>Home</h2>");
    }
    else if(request.url == "/first"){
        response.write("<h2>first</h2>");
    }
    else if(request.url == "/contact"){
        response.write("<h2>Contacts</h2>");
    }
    else{
        response.write("<h2>Not found</h2>");
    }
        response.end();
};
http.createServer(requestHandler).listen(13000);