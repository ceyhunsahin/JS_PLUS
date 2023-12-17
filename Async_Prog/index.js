console.log("say hello");

let id = setTimeout(function() {
    console.log("say hello from timeout");
},2000);

console.log("Say Hello Again");

console.log(id);

clearTimeout(id) // setTimeout'a islem yaptirmadi burada


//? An EXAMPLE

const slowTask = () => {
    let i = 0 ;
    let result = {firstName: 'Ceyhun',  lastName : 'SAHIN'};
    do {
        i++;
        // some long operation
    } while (i < 1000000);
    return result 
}
console.log("...1");
console.log("...2");
setTimeout( () => {
    let res = slowTask()
    console.log(res);
},5000);  // ms kismi 0 veya yoksa ne zaman vakti bulursan gazla demek

console.log("...3");
console.log("...4");

// wait function
/* function wait(ms) {
    const start = new Date().getTime();
    let end = start;
    while(end< start+ ms){
        end = new Date().getTime(); 
    };
    
}
wait(4000) */

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Kullanımı
  async function exampleFunction() {
    console.log('Bekleme başlıyor...');
    await wait(3000); // 3 saniye bekler
    console.log('3 saniye geçti!');
  }
  
  exampleFunction();

  // Consol'un time ozellikleri

  console.time('time elapsed');
  console.log("hello");
  wait(1500);
  console.timeLog('time elapsed');
  console.log('world');
  console.warn("this message is printed after 1.5 sn seconds")
  console.timeEnd("time elapsed")
