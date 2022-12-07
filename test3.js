console.log('hello');
console.log('========== test2 ==========');

const circle = {
    radius: 2,
    draw: function () {
        console.log('draw');
    }
}

/// how can create independent copy of object

const another = {};
for (let key in circle) {
    another[key] = circle[key];
}
console.log(another);

const another2 = Object.assign({ color: 'red' }, circle);
console.log(another2);

/// ... (spered operator)
const another3 = { location: 'there', ...circle, color: 'blue' };
console.log(another3);