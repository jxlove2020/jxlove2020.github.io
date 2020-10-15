// 동기 Sync, 비동기 Async
const fs = require('fs');

// Sync 동기 방식
console.log(1);
var data = fs.readFileSync('data.txt', {encoding:'utf8'});
console.log(2);
console.log(data);
console.log(3);

// 구분선 표시
console.log('---------------------');

// Async 비동기 방식
console.log(11);
var data = fs.readFile('data.txt', {encoding:'utf8'}, function(err, data){
    console.log(12);
    console.log(data);
});
console.log(13);

