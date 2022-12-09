console.log('hello');
console.log('========== test4 ==========');

// Math is a native object in js that helps to calculations

console.log(Math.PI);

console.log(Math.random());

function rand(min ,max){
    // return Math.random() * (max -min) +min;
    /// for remove decimal (2.124 -> 2 ) use Math.floor()
    return Math.floor(Math.random() * (max -min) +min);
}

console.log(rand(10 , 50));

console.log(Math.round(2.5423));
console.log(Math.min(1,2 ,18 , 4, 22));
console.log(Math.max(7, 4 , 9, 43 , 37));
console.log(Math.abs(-1));