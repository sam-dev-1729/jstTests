console.log('hello');
console.log('========== test11 ==========');

// how can combine arrays with eachother

/* const first = [1,2,3];
const second = [4,5,6];
console.log('first :'+first);
console.log('second :'+second);

const combined = first.concat(second);
console.log('combined :'+combined);

const slice = combined.slice(2,4);
console.log('slice :'+slice); */

/* const first = [{id:1},2,3];
const second = [4,5,6];
console.log('first :');
console.log(first);
console.log('second :');
console.log(second);


const combined = first.concat(second);
first[0].id = 10;
console.log('combined :');
console.log(combined);
 */
/// ... (spread operator)

console.log('first :');
console.log(first);
console.log('second :');
console.log(second);

const combined = [...first,...second];
console.log('combined :');
console.log(combined);

const slice = combined.slice(2,4);
console.log('slice :'); 
console.log(slice); 