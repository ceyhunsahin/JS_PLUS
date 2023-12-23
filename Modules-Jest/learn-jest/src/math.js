
const fahrenheitToCelcius = (temp) => (temp -32) / 1.8 ;

const celciusToFahrenheit = (temp) => (temp * 1.8) + 32;


const calculateTotal = (price, vat = 0.18) => {
    return price * (1 + vat)
}

const fibonacci = (p = 1) => {

    let f = 1;
    let arr = []

    for (let i = 0; i < p ; i++) {

        arr.length >= 2 ? arr.push(arr[arr.length-1] + arr[arr.length-2]) : arr.push(f) 
    }
    console.log(arr[arr.length-1]);

    return arr[arr.length-1]





};
fibonacci()

// ! Node modules export syntax


module.exports =  { calculateTotal, celciusToFahrenheit,fahrenheitToCelcius,fibonacci };