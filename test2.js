console.log('hello');
console.log('========== test2 ==========');


const circle = {
    radius: 2,
    draw: function () {
        console.log('draw');
    }
}
/// navigate object wirh for-in loop
/*
for (let key in circle) {
    console.log(circle[key]);
    // console.log(key);
}
*/

/// navigate object with for-of lopp

/// Object is js internal constructor , keys method get object and return it as String array;
let circleKeys = Object.keys(circle);
console.log(circleKeys);

for (let index of circleKeys) {
    console.log(index);
}

/// entries method get object and retern array of key-value pair arreys.

let circleEnteries = Object.entries(circle);
console.log(circleEnteries);

/// in keyword uses

if ('radius' in circle) {
    console.log('yse');
    console.log('radius' in circle);

} else {
    console.log('no');
}