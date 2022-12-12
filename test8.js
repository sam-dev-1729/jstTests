console.log("hello");
console.log("========== test8 ==========");

/* const number = [1,2,3,1,4];
 console.log(number.indexOf(1));

///indexOf(chosenValue , startSearchFrom)
console.log(number.indexOf(1,1))

/// find last index of choesn element
console.log(number.lastIndexOf(1));

if(number.includes(7)){
    console.log('yes');
}else{
    console.log('no');
} */

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

/// you must use find() to search in reference types
console.log(
  courses.find(function (element) {
    return element.name === "a";
  })
);

/// arrow function =>
console.log(courses.find((element) => element.name === "a"));

/// get index of element
const result = courses.findIndex(course => course.name === "a");
console.log(result);
