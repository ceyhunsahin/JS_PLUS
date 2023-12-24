//? MAP and ForEach

const user = [
    {id : 0, name : "ali", age : 22},
    {id : 1, name : "veli", age : 24},
    {id : 2, name : "alperen", age : 18},
    {id : 3, name : "volkan", age : 20},
];
//forEach
const ageArray =[]
user.forEach((el) => {
    ageArray.push(el.age*2)
});

console.log(ageArray);

const ageArray2 = user.map((el) => {
    return el.age *2
})
console.log(ageArray2);

//! new Approach for await

async function newApproach() {
    for await (const prom of promArray){
        console.log(prom);
    }
}

//! condition

const condition = true;

const obj = {
    key1 : 'value1',
    ...(condition && {key2 :'value2'}),
};

console.log(obj);

//? remove from end

const a = [1,2,3,4,5];
a.pop()
console.log(a);

const b = a.shift()

console.log(a);

var c = a.splice(1,1)
console.log(c);

var d = [1,2,3,4,5,6,7,8,9,0];

for ( var i = 0; i < d.length; i++ ) {
    if (d[i] === 5) {
        d.splice(i,1);
    }
}
console.log(d);

var m = 11;
var n = "ceyhun";
console.log((m+n));

const max = Math.max(...d);
console.log(max);
const min = Math.min(...d);
console.log(min);


const array = ["a", "b", "c", "d", "e", "f", "a","c", "f"];

const method1 = [... new Set(array)];

console.log(method1);
/// 2.metot
const obj2 = {} ;
for (let ar of array) {
    obj2[ar] = true;
}

console.log(obj2);

const method2 = Object.keys(obj2);
console.log(method2);

// Array.from

const sta = 'ceyhun';
console.log(Array.from(sta).reverse().join('')); 

//! SORT islemi
const product = [
    {id : 0, name : "ali", age : 22},
    {id : 1, name : "veli", age : 24},
    {id : 2, name : "alperen", age : 18},
    {id : 3, name : "volkan", age : 20},
];
const sortProduct = product.sort((a,b) => (
    a.age > b.age ? 1 : -1
)) 

console.log(sortProduct);
