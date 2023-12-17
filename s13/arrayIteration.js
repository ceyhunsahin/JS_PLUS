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

const newGrade = grade.map((note) => {
 return note < 50 ? note + (note*(20/100)) : note + (note*(10/100))
}) // return olmasa donmez
console.log(newGrade);
const newGrades = grade.map((note) =>
     note < 50 ? note + (note*(20/100)) : note + (note*(10/100))
   ) // return olmasa donmez
console.log(newGrades);
