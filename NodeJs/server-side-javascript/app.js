var express = require('express');
var app = express();

// 소스를 보기 좋은 형태로 뿌려줌
app.locals.pretty = true;

const hostname = '127.0.0.1';
const port = 3000;

// templete engine jade 연결 , views 폴더 만들어줌.
app.set('view engine', 'jade');
app.set('views', './views');

// 미들웨어 : 정적인 파일이 위치할 디렉토리를 지정하는 기능
app.use(express.static('public'));

// /topic?id=1
app.get('/topic/:id', function(req, res){
  var topics = [
    'Javascript is ...',
    'NodeJs is ...',
    'Express is ...'
  ];
  var output = 
  `
    <a href="/topic/0">Javascript</a><br>
    <a href="/topic/1">Nodejs</a><br>
    <a href="/topic/2">Express</a><br><br>
    ${topics[req.params.id]}
  `
  //res.send(topics[req.query.id]);
  res.send(output);
})

app.get('/topic/:id/:mode', function(req, res){
  res.send(req.params.id + ', ' + req.params.mode);
})

app.get('/template', function(req, res){
  res.render('temp', {time: Date()});
})

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
