//math 가 있으면 할당, 없으면 빈객체를 할당
// var math = math || {};

// IIFE 즉시실행함수 사용
/*
(function(){
    function sum(a, b){
    return a+b;
    }

    math.sum = sum;
})()
*/

export function sum(a, b){
    return a+b;
}