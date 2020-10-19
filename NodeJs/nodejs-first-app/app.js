var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

// 미들웨어 : 정적인 파일이 위치할 디렉토리를 지정하는 기능
app.use(express.static('public'));
// 미들웨어 : post 방식으로 전달되어진 값을 사용할 수 있도록 해주는 기능
app.use(bodyParser.urlencoded({ extended: false }))

// 소스를 보기 좋은 형태로 뿌려줌
app.locals.pretty = true;

app.set('views', './views');
app.set('view engine', 'jade');

const hostname = '127.0.0.1';
const port = 3000;

app.get('/topic/new', function(req, res){
     fs.readdir('data', function(err, files){
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        res.render('new', {topics: files});
    });
});

app.get(['/topic', '/topic/:id'], function(req, res){
    fs.readdir('data', function(err, files){
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
        }

        var id = req.params.id;
        if(id){
            // id 값이 있을 때
            fs.readFile('data/'+id, 'utf-8', function(err, data){
                if(err){
                    console.log(err);
                    res.status(500).send('Internal Server Error');
                }
                res.render('view', {topics: files, title:id, description:data});
            })
        }
        else {
            // id 값이 없을 때
            res.render('view', {topics:files, title:'', description:''});
        }
    })    
});

// 중복 제거
// app.get('/topic/:id', function(req, res){
//     var id = req.params.id;

//     fs.readdir('data', function(err, files){
//         if(err){
//             console.log(err);
//             res.status(500).send('Internal Server Error');
//         }
//         fs.readFile('data/'+id, 'utf-8', function(err, data){
//             if(err){
//                 console.log(err);
//                 res.status(500).send('Internal Server Error');
//             }
//             res.render('view', {topics: files, title:id, description:data});
//         })
//     })    
// });

app.post('/topic', function(req, res){
    var title = req.body.title;
    var description = req.body.description;
    fs.writeFile('data/' + title, description, function(err){
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        // res.send('Success!');
        res.redirect('/topic/' + title);
    });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
