const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// 서버를 만든다.
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

// 서버를 리스닝한다.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});