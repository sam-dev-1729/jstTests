console.log('hello')




/// factory functions
/* function createCircle(radius, draw) {
    return {
        radius,
        draw
    }
}
let cricle1 = createCircle(1, function () { console.log('draw a circle') });
console.log(cricle1.draw()); */

/// construstor functions
/*function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('I am Here');
    };
}

let obj = new Circle(23);

console.log(obj); */

/// Functions are object in javascript
/*let func = Function('radius', `
this.radius = radius;
this.draw = function(){
        console.log('hey man');
    };
`);
let c1 = new func(27);
console.log(c1);*/

/// to type on value exist in javascript
/// value types (primitive): {string, number , boolean , symbol , undifine , null}
/// reference type : {objects , arrays , fuctions} , all of reference type is object
let x1 = 10;
let y1 = x1;
x1 = 20;
console.log(y1);

console.log('============================');

let x = { value: 10 };
let y = x;

x.value = 20;
console.log(y);