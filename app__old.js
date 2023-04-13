const http = require('http');

const routes = require('./routes__old');

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);