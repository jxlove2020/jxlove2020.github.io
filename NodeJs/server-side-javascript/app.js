var express = require('express');
var app = express();

const hostname = '127.0.0.1';
const port = 3000;

// 미들웨어 : 정적인 파일이 위치할 디렉토리를 지정하는 기능
app.use(express.static('public'));

app.get('/dynamic', function(req, res){
  var lis = '';
  for (var i=0; i<5; i++){
    lis = lis + '<li>coding</li>';
  }
  var output = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hello</title>
  </head>
  <body>
      Hello, Dynamic
      <ul>
        ${lis}
      </ul>
  </body>
  </html>
  `
  res.send(output);
});

// respond with "hello home" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello home');
});

app.get('/login', function(req, res) {
  res.send('Login please');
});

app.get('/image', function(req, res) {
  res.send('image, <img src="/image01.jpg" style="width:300px" alt="" />');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
