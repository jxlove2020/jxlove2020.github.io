console.log(1+1);

a=[3,1,2];
console.log(a);

// a=[3,1,2];
// a.sort();
// console.log(a);


// a=[3,1,2];
// function b(v1, v2){ return v2-v1};
// a.sort(b);
// console.log(a);

a=[3,1,2];
function b(v1, v2){ return v1-v2};
a.sort(b);
console.log(a);

// a=[3,1,2];
// function b(v1, v2){ return 0};
// a.sort(b);
// console.log(a);

// a=[3,1,2];
// function b(v1, v2){ return console.log('c', v1, v2); return 0;};
// a.sort(b);
// console.log(a);