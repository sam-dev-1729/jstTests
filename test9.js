console.log('hello');
console.log('========== test9 ==========');


const numbers = [10,20,33,45,52,69,74,85];

/// how can delete element of array
/// for remvoe at end of array use pop() , pop(), return removed element as result

console.log(numbers);
const last = numbers.pop();
console.log(last);
console.log(numbers);

/// for remvoe at first of array use shift() , shift(), return removed element as result

const first = numbers.shift();
console.log(first);
console.log(numbers);

/// for remvoe at chosen index of array use shift() 
/// shift() return removed element as result.

const reslut = numbers.splice(0,3);
console.log(reslut);
console.log(numbers);
