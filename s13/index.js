const person = {
    brand : 'Clarusway',
    firstName: ['ceyhun', 'Zehra', 'Alperen', 'Volkan'],
    birthYear: [1977, 1978,1979,1980],
    location: [
        'New York',
        'Ankara',
        'Istanbul',
        'Izmir'
    ],

    hotel(hours, nameIndex = 0, yearIndex= 1, locIndex = 2){

        console.log(`${this.firstName[nameIndex]} ${this.birthYear[yearIndex]}'inda ${this.location[locIndex]}'da ${hours} yil sureyle kaldi`);
    },
    // biz bunu book : function ({isim, yil, sehir}) seklinde'de kullanabiliriz,
    //ustteki bunu sirayla alir, ancak burda parametre sirasina dikkat etmeksizin kullanabiliriz.


    book : function({hours, nameIndex = 0, yearIndex= 1, locIndex = 2}){

        console.log(`${this.firstName[nameIndex]} ${this.birthYear[yearIndex]}'inda ${this.location[locIndex]}'da ${hours} yil sureyle kaldi`);
    }
  
/*     get age() {
        return new Date().getFullYear() - this.birthYear;
    },

    set age(value) {
        if (value > 0 && value < 150) {
            this.birthYear = new Date().getFullYear() - value
        }
    } */
};
/* console.log(person.age);

person.age = 10;

console.log(person.birthYear); */

/* const {location : {city:sehir}} = person;

console.log(sehir); */

person.hotel('3',2, 1, 3)
person.book({
    hours : '4',
    yearIndex:2,
    locIndex : 1,
    nameIndex : 1}
);
//***************************************************** */
// ARRAY DESTRUCTION

const date = [1977, 4, 24];

const year1 = date [0];
const month1 = date[1];
const day1 = date[2];
console.log(day1);

const [year, month] = date;

console.log(month);
const [year2,, day2] = date;

console.log(day2);

const nestedArray = [1,2,3, [4,5,6] ,7]
const [first, second, third,[forth, fifth],seventh] = nestedArray
console.log(fifth);

[...nestedArray].forEach ((e)=> {
    console.log(e);
})

const not = {
    id : 1,
    title : 'My first note',
    date:'25/04/1977'
}

const {title} = not;
console.log(title);

for (let [key,value] of Object.entries(not)){
    console.log(key + '=>>' + value);
}

Object.entries(not).forEach(([k, v]) =>{
    console.log(k + '=>>' + v);
})

// DEFAULT PARAMETERS

function greet(user = 'Guest') {
    console.log(`Hello ${user}`);
}

greet('ceyhun')
greet()

/// SPREAD ve REST OPERATORLERI
// ikisi de ... olarak kullanilir
// shallow copy nesne kopyalamak icin kullanabiliriz

/* let newPerson = person;
newPerson.brand = 'Hotel California'
console.log('person.brand =>>', person.brand );
console.log('newPerson.brand =>>', newPerson.brand ); */

let newPerson2 = { ...person } ; // !!!! 
newPerson2.brand = 'Hotel Cankaya'
console.log('person.brand =>>', person.brand );
console.log('newPerson2.brand =>>', newPerson2.brand );

const arr1 = [1,2,3]
const arr2 = [4,5,6]

const arr3 = [...arr1, 7,8, ...arr2,9,11]
console.log(arr3);
const arr4 = [...arr3]
arr3.push(42)
console.log(arr3);
console.log(arr4);


const personal = {
    isim : 'Ceyhun',
    soyad : 'sahin'
} 

const newPersonal = {
    ...personal,
    soyad :'Cinar',
    yas : 39
}
console.log(personal);
console.log(newPersonal);

const deney = ['my', 'name', 'is', 'ceyhun'];
const toplu = deney.join(' ');
console.log(toplu);

//console.log(...deney);
const arr6 = [44];

arr6.push([...arr3])
console.log(arr6);

// REST OPERATOR

function sum(...numbers) {
    let total = 0
    //console.log(arguments);
    numbers.forEach((e) =>{
        /* if (typeof e === 'number') {
            total += e
        }
        else {
            return;
        }; */
        total = !isNaN(e) ? total + e : total // calisiyor 
        
    });
    return total;
}
console.log(sum(1,2,3,4,5,'Ceyhun', 6));


// NULLISH COALESCING OPERATOR

let temperature ;

const tempStatus = `Temperature is ${temperature ?? 'ERROR'} `

console.log(tempStatus);
