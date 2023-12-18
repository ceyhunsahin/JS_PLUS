/* console.log("say hello");

let id = setTimeout(function() {
    console.log("say hello from timeout");
},2000);

console.log("Say Hello Again");

console.log(id);

clearTimeout(id) // setTimeout'a islem yaptirmadi burada */


//? An EXAMPLE

/* const slowTask = () => {
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
console.log("...4"); */

// wait function
function wait(ms) {
    const start = new Date().getTime();
    let end = start;
    while(end< start+ ms){
        end = new Date().getTime(); 
    };
    
}
//wait(4000)
/* 
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Kullanımı
  async function exampleFunction() {
    console.log('Bekleme başlıyor...');
    await wait(3000); // 3 saniye bekler
    console.log('3 saniye geçti!');
  }
   */
/*   exampleFunction(); */

  // Consol'un time ozellikleri

/*   console.time('time elapsed');
  console.log("hello");
  wait(1500);
  console.timeLog('time elapsed');
  console.log('world');
  console.warn("this message is printed after 1.5 sn seconds")
  console.timeEnd("time elapsed") */

  const carExpression = [
    {
        "id": 1,
        "marka": "Volvo",
        "model": "XC90",
        "yıl": 2020,
        "renk": "Mavi"
    },
    {
        "id": 2,
        "marka": "Mercedes",
        "model": "Benz C-Class",
        "yıl": 2021,
        "renk": "Siyah"
    },
    {
        "id": 3,
        "marka": "BMW",
        "model": "3 Series",
        "yıl": 2019,
        "renk": "Beyaz"
    },
    {
        "id": 4,
        "marka": "Audi",
        "model": "A4",
        "yıl": 2022,
        "renk": "Gri"
    },
    {
        "id": 5,
        "marka": "Saab",
        "model": "Model S",
        "yıl": 2023,
        "renk": "Kırmızı"
    }
]
/* let carOzellik = document.querySelector('#ozellikler')
console.log(carOzellik);

let seconds = 11
function showTime() {
    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString();
    seconds--;
    carOzellik.innerText = seconds;

    if (seconds === 0) {
        carOzellik.innerText = "Time is over";
        clearInterval(display)
    };

};

let display = setInterval(showTime,1000); */



//let car = document.querySelector('#cars')



// SETTIMEOUT'u 1 kere calissin istedigimiz isler icin kullaniyoruz.
//? SETINTERVAL

function hello(){
    console.log("hello ceyhun");
}

//setInterval(hello, 2000)



//? PROMISE KONUSU



/* new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000); // bir değer ile resolve çağrılır
  })
  .then(function(result) { // ilk .then
    console.log(result); // 1
    return result * 2;
  })
  .then(function(result) { // ikinci .then
    console.log(result); // 2
    return result * 2;
  })
  .then(function(result) { // üçüncü .then
    console.log(result); // 4
    return result * 2;
  }); */

/* const promise = new Promise((resolve, reject) => {
    // request --> req
    // response --> res
    // some calculation
    const data = "some results";
    const success = true;
    if (success) {
        resolve(data)
    };
    reject(new Error('Some Error Occured'))

    wait(1000);
    const userData = {
        firstName : 'Ceyhun',
        birthDay: 1977
    };
    let successful = Math.floor(Math.random() * 2);
    if (successful) resolve(userData);
    reject(new Error('Stg went wrong'));

})

promise.then((result) => {

            return 'Selam';
        }).then(r => r)
        .catch(error => {console.log(error)}
             )
        .finally(console.log('finally islem tamamlandi'));
 */


/* fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // JSON dönüşümü için bir Promise döndürür
  })
  .then(data => {
    console.log(data); // Elde edilen veri
  })
  .catch(error => {
    console.error('Fetch error:', error); // Hata durumunda çalışır
  }); 
 */


const cayDemle = () => {
    suyuKaynat ()
    .then((durum1) => {
        console.log('durum1 =>',durum1);
        return cayEkle() 
    })
    .then((durum2) => {
        wait(3000);
        console.log('durum2 =>',durum2);
        return afiyet()
    })
    .then((durum3) =>
        console.log('durum3 =>', durum3))
    .catch((err) => {
        console.log(err);
    })    
}

const suyuKaynat = () => {
    return new Promise ((resolve, reject) => {
        const nasip = Math.floor(Math.random()*5);
        if (nasip) {
            return resolve('Su Kaynadi')
        }
        reject('Kettle Arizali')
    })
}

const cayEkle = () => {
    return new Promise ((resolve, reject) => {
        const cayNasibi = Math.floor(Math.random()*10); 
        if (cayNasibi) {
            resolve('Cay Eklendi')
        }
        reject('Cay Bitmis')
    })
}

const afiyet = () => {
    wait(2000);
    return 'cay Hazir Afiyet olsun'
}

//cayDemle()

//? ASYNC ... AWAIT


async function fetchData() {
    try {
      // Bir asenkron isteği bekler
      const response = await fetch('https://dummyjson.com/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json(); // JSON dönüşümünü bekler
      console.log(data); // Elde edilen veriyi gösterir
    } catch (error) {
      // Hataları yakalar
      console.error('Fetch error:', error);
    }
  }
  
fetchData();


const func1 = async () => {
    wait(2000);
    return 'Async function is resolved'
}
//console.log(func1())


const cayDemle2 = async () => {
    try {
    const durum1 = await suyuKaynat();
    console.log(durum1);
    const durum2 = await cayEkle();
    console.log(durum2);
    const durum3 = await afiyet();
    console.log(durum3);
    } catch (err) {
        console.log(err);
    }

}

cayDemle2()




