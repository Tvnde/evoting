const http = require('http');
const port = process.env.PORT || 6010;
const app = require('./main');

const server = http.createServer(app);

server.listen(port, () => {
    "server started on port "+port;
});