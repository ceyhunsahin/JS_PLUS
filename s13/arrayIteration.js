// For DONGUSU

/* const arr = [6,8,12,16,23];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
};


for (let i in arr) {
    console.log(arr[i]);
};

for (let a of arr) {
    console.log(a);
} */


/*  **************** FOREACH ************** */

const students = ['Ceyhun', 'zehra', 'Volkan', 'Alperen'];

students.forEach(student =>{
    console.log(student);
})

const payments = [100,300,-250,430,-234,-534,232,450] ;

payments.forEach((p, index) => {
    p > 0 
    ? console.log(index, `${p} lira para yatirdik`) 
    :console.log(index,`${p} lira para cektik`) ;

} )
    /*         MAP             */

const rakams = [3,5,1,5,3]

const kati = rakams.map((r) => r*5)
console.log(kati);
console.log(rakams);


    /*         FILTER             */


const filt = rakams.filter((n) =>  n > 4);
console.log(filt);
const filt2 = rakams.filter((n) =>  {
    return n < 4
});
console.log(filt2);


const grade = [30,50,70,20,65,25,55];

let newGrade = grade.map((note) => {
 return note < 50 ? note + (note*(20/100)) : note + (note*(10/100))
}) // return olmasa donmez
console.log(newGrade);
let newGrades = grade.map((note) =>
     note < 50 ? note + (note*(20/100)) : note + (note*(10/100))
   ) // return olmasa donmez
console.log(newGrades);

newGrade = newGrade.map((note, index) => {
    const grades = (note < 50 ? note + (note*(20/100)) : note + (note*(10/100)));
    return `${index + 1}. student's grade is ${grades} `
   }) // return olmasa donmez
console.log(newGrade);



document.querySelector("button").addEventListener('click', () => {
    const counter = document.querySelector("#counter");
    counter.innerText = newGrade
});


// Palindrome with FILTER

const words = ["mum", "kek", "gel", "isi", "iyi"];

const palindrome = words.map(item => item ===item.split('').reverse().join('') ? item : null).filter(Boolean);

console.log(palindrome);

///

const checkPalindrome = words.map(i => [...i].reverse().join('')===i ? i : null).filter(Boolean);
console.log(checkPalindrome);

const palindromes = words.filter(item => item === item.split('').reverse().join(''));

console.log("filter ile",palindromes); 


// REDUCE

const numbers = [1, 2, 3, 4, 5];

const sum2 = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // Başlangıç değeri olarak 0 kullanıyoruz

console.log(sum2); // 15

const people = [
    { name: "Ahmet", age: 20 },
    { name: "Mehmet", age: 30 },
    { name: "Ayşe", age: "" },
  ];
  
 const ageGroups = people.reduce((accumulator, person) => {
    const age = person.age;
    if (!accumulator[age]) {
      accumulator[age] = [];
    }
    accumulator[age].push(person);
    return accumulator;
  }, {});
  
  console.log(ageGroups);

const salaries = [20000,24000,16000,28000,23001];

const avgSalaries = salaries.reduce((acc, salary) => {
    return (acc+salary)/salaries.length
},0);
console.log(avgSalaries);

// aylik maas > 20k'nin toplami

const salaryTotal = salaries.filter(salary => salary > 20000).reduce((acc, s) => acc+s, 0);

console.log(salaryTotal);

let personals = [
    {
        "id": 1,
        "name": "Elif",
        "surname": "Kaya",
        "job": "Doktor",
        "age": 40,
        "salary": 8271
    },
    {
        "id": 2,
        "name": "Ali",
        "surname": "Çelik",
        "job": "Mimar",
        "age": 41,
        "salary": 3201
    },
    {
        "id": 3,
        "name": "Elif",
        "surname": "Aslan",
        "job": "Mühendis",
        "age": 26,
        "salary": 7368
    },
    {
        "id": 4,
        "name": "Ahmet",
        "surname": "Kaya",
        "job": "Avukat",
        "age": 42,
        "salary": 3513
    },
    {
        "id": 5,
        "name": "Elif",
        "surname": "Alan",
        "job": "Mühendis",
        "age": 38,
        "salary": 4163
    },
    {
        "id": 6,
        "name": "Fatma",
        "surname": "Yılmaz",
        "job": "Öğretmen",
        "age": 32,
        "salary": 6265
    }
];

console.log(personals);

const jobs = personals.map(j => console.log(j.job));

personals.forEach(j =>console.log(j.job))

const newAge = personals.map(a => a.age + 1)
console.log(newAge);

/* const newValue = personals.map((item) => {
    let acc = {}
    acc['age'] = item.age + 5
    acc['full_name'] = item.name.toLocaleUpperCase() + ' ' + item.surname.toLocaleUpperCase()
    return acc
});
 */
const newValue = personals.map((item) => {
    return {
   'age' : item.age + 5,
    'full_name' : item.name.toLocaleUpperCase() + ' ' + item.surname.toLocaleUpperCase()}
    
});
console.log(newValue);

// list person name whose age is <33

const newAges = personals.filter(i => i.age <33).map(n => n.name);
console.log(newAges);

// jobs as a new object
const newjobs = personals.map((n)=> {
    return {
        'age' : n.age,
        'name' : n.name.toUpperCase()
    }
});
console.log(newjobs);
//calculate avg age of people

const avgAge = personals.reduce((a, i) => a + i.age,0) / (personals.length)
console.log(avgAge);

// increase salaries of jobs by 20% and calcul sum of increased salary

const salariesNew = personals.map(item => item.salary + (item.salary * 0.2)).reduce((acc, s) => acc+s,0);
console.log(salariesNew);

personals = personals.map(item => item.salary + (item.salary * 0.2));
console.log(personals);

function deleteById(array, id) {
   return array.filter(i => i.id !== id)
}

const newPersonelList = deleteById(personals, '4');

console.log(newPersonelList);

arr = 'ceyhun';
const x = Array.from(arr)
console.log(x);


console.log("Hello.");
setTimeout(function() {
  console.log("Goodbye!");
}, 5000);
console.log("Hello again!");

