console.log('hello');
console.log('========== test7 ==========');

const number = [3,7];
console.log(number);
/// add element to array : arrayName.push(value1, value2,...)
number.push(5);
console.log(number);

/// add elemant from first : arrayName.unshift(value1 ,...)
number.unshift(2,12);
console.log(number);

/// add element from chosen index : arrayName.splice(addFrom,delete , value1,...)
number.splice(2,0,56,'b',43);
console.log(number);