export const method1 = (num) => {
    return num * num;
}

export const SECOND = 60;
const DAY = "Mercredi";
const MONTHS = "December" ;




function add (n1, n2) {
    return n1 + n2
}

export {add}


let localCounter = 12;

function inc(amount = 8) {
    localCounter += amount
    return localCounter
}

const moduleName = "MyModule" ;

//export default moduleName;

console.log(`${moduleName} is loaded`); // Hoisted oldu

export default (num) => num*num;

export { DAY, MONTHS as moi, inc, localCounter as counter };
