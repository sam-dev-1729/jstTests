console.log("hello");
console.log("========== test13 ==========");

// const numbers = [1,4,6,9];

// let sum  = numbers.reduce(function(a,c){
//     return a +c;
// },0);

// console.log(sum);
// ------------------------------------------------
// function interest(principal ,rate=3.5 , years=5){
//      // rate = rate || 4;
//     // years = years || 6
//     return((principal*rate)/100) * years;
// }

// //console.log(interest(100000,3.5,5));
// console.log(interest(100000));
// ------------------------------------------------

// const person = {
//   fname: "ali",
//   lname: "mohamodi",
//   get fullName() {
//     return `${person.fname} ${person.lname}`;
//   },
//   set fullName(value) {
//     const parts = value.split(" ");
//     this.fname = parts[0];
//     this.lname = parts[1];
//   },
// };
// //getter & setter
// person.fullName='sam mah';
// console.log(person.fullName);

// -----------------------------------------------

// rest operator

function sum(disconunt,...args) {
    // console.log(args);
    let total =  args.reduce((a, b) => a + b) * (1 - disconunt);
    return total;
}
console.log(sum(0.5,1, 3.4, 6, 7));