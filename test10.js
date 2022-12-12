console.log('hello');
console.log('========== test10 ==========');

/// you don't need to managing memory in javascript
/// "garbage election" or "garbage collection" or something do this automatically

let numbers = [10,20,33,45,52,69,74,85];
console.log('numbers : '+ numbers);

let another = numbers;

/// method 1: you must reasign array to empty array
/// with this method you just remove numbers array
/// but you stil have values on another array

/* numbers = [];
console.log('another : '+ another);
console.log('numbers : '+ numbers); */

/// method 2: you must set length of array to 0 
/// with this method you remove reference (address of bytes) 
/// So you can no longer access the value of numbers or another array.

/* numbers.length = 0;
console.log('another : '+ another);
console.log('numbers : '+ numbers);
 */

/// method 3: use splice() method 
/// method 3 act like method 2

numbers.splice(0 , numbers.length);
console.log('another : '+ another);
console.log('numbers : '+ numbers);
