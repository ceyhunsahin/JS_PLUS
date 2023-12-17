const kullanici = {
    ad: "Ahmet",
    soyad: "Yılmaz",
    yas: 30,
    adres: {
      sokak: "Örnek Sokak",
      sehir: "İstanbul",
      postaKodu: "34000"
    },
    hobiler: ["Yüzme", "Müzik", "Kitap okuma"]
  };

const { yas, adres :{ sokak :sokaklar }} = kullanici;

console.log(yas);
console.log(sokaklar);

/* const sum = (a,b) => {
   return a+b
}; */

/* function hesapla (sum){
    const sonuc = sum(5,7);
    return sonuc
};
const x = hesapla(sum)
console.log(x); */
// ***************************************

//                        CALLBACK
// ***************************************

document.querySelector("button").addEventListener('click', () => {
    const counter = document.querySelector("#counter");
    counter.textContent = Number(counter.textContent)+1
});

const sum = (a,b) => a+b ;
const sub = (a,b) => a-b ;
const mul = (a,b) => a*b ;
const div = (a,b) => a/b ;

const calculate = (callback) => {

  const num1 = Number( +prompt ("First Number"));
  const num2 = Number( +prompt ("Second Number"));

  console.log("Result : " , callback(num1, num2));
}

//calculate(sum)
//calculate(mul)
console.log(sum(5,7));

