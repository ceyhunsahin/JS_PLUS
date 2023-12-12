// DOM recap, DOM traversing

let navbarPathItemText = document.getElementsByClassName("nav__item")[0].innerText;
console.log(navbarPathItemText);

let navbarPathItemText2 = document.getElementsByClassName("nav__link")[0].innerText;
console.log(navbarPathItemText2);

let navbarPathItemText3 = document.getElementsByClassName("nav__links")[0].children[0].innerText;
console.log(navbarPathItemText3);

let navbarPathItemText4 = document.getElementsByClassName("nav__links")[0].firstElementChild.innerText;
console.log(navbarPathItemText4);

let navbarPathsLi= document.querySelector(".nav__item");
console.log("navbarPathsLi =>>>>",navbarPathsLi);

window.addEventListener("load", () => { console.log("Windows Loaded")});
//window.onload = () => {console.log ('Windows loaded 2. time')}

navbarPathsLi.addEventListener("click", (e)=> {
    alert(navbarPathsLi.innerText + " clicked");
});

const onPaths = () => {
    alert('Merhaba, burası bir uyarı!');
}
navbarPathsLi.onclick = onPaths



let navbarInstructorLi= document.querySelectorAll(".nav__item")[1];
console.log("navbarInstructorLi =>>>>",navbarInstructorLi);
// const mouseoverForInstructors = () => {
//         navbarInstructorLi.innerText = "Over me";
//         navbarInstructorLi.style.color = "green";
//         navbarInstructorLi.style.fontSize = "1.7rem";
//
// }
// const mouseoutForInstructors = () => {
//
//         navbarInstructorLi.innerText = "Instructors";
//         navbarInstructorLi.style.color = "#444444";
//         navbarInstructorLi.style.fontSize = "1.7rem";
// }
const mouseEvents = (e) => {
    if (e.type === 'mouseover') {
        navbarInstructorLi.innerText = "Over me";
        navbarInstructorLi.style.color = "green";
        navbarInstructorLi.style.fontSize = "1.7rem";
    }
    else if (e.type === "mouseout") {
        navbarInstructorLi.innerText = "Instructors";
        navbarInstructorLi.style.color = "#444444";
        navbarInstructorLi.style.fontSize = "1.7rem";
    }
}
navbarInstructorLi.addEventListener('mouseover',mouseEvents )
navbarInstructorLi.addEventListener('mouseout',mouseEvents )
// navbarInstructorLi.onmouseover = mouseoverForInstructors
// navbarInstructorLi.onmouseout = mouseoutForInstructors

let navbarStudentLi= document.querySelectorAll(".nav__item")[2];
console.log("navbarStudentLi =>>>>",navbarStudentLi);

const getRandomRGBColor = (event) => {
    const r = Math.floor(Math.random() * 256); // Random value between 0 and 255 for Red
    const g = Math.floor(Math.random() * 256); // Random value between 0 and 255 for Green
    const b = Math.floor(Math.random() * 256); // Random value between 0 and 255 for Blue
    // stop bubling
    event.stopPropagation();
    navbarStudentLi.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

    // Returning the RGB color string
}
//navbarStudentLi.addEventListener('click',getRandomRGBColor) // calisiyor
navbarStudentLi.onclick = getRandomRGBColor

let charSpan = document.getElementById("charCount");
console.log(charSpan)
let lastName = document.querySelector("Input[name = last_name]")
console.log(lastName)


const charCounter = () => {

    if ("keyup") {
        if (lastName.value.length === 0)
            {
            charSpan.style.display = "None";
            }
        else
            {
            charSpan.innerText = lastName.value.length + "/40"
            charSpan.style.display = "inline";
            };
    };
};
// charCount.setAttribute("name", "Ceyhun");
lastName.addEventListener('keyup', charCounter);
// lastName.addEventListener("keyup", () => {
//     charSpan.innerText = lastName.value.length + "/40"
// })


// DatePicker

let birthdayPicker =document.querySelector("[name='birthday']");

birthdayPicker.addEventListener("change", () => {
    console.log(typeof birthdayPicker.value )
    let year = new Date().getFullYear() - new Date(birthdayPicker.value).getFullYear();
    alert("You are" + year + " years old.")
} )






let navbarSignupLi= document.querySelectorAll(".nav__links")[0].lastElementChild.innerText;
console.log("navbarSignupLi =>>>>",navbarSignupLi);

















































// let navbarPathItemText = document.getElementsByClassName("nav__item")[0].innerText;
// console.log(navbarPathItemText);

// let navbarPathItemText2 = document.getElementsByClassName("nav__link")[0].innerText;
// console.log(navbarPathItemText2);

// let navbarPathItemText3 = document.getElementsByClassName("nav__links")[0].children[0].innerText;
// console.log(navbarPathItemText3);

// let navbarPathItemText4 = document.getElementsByClassName("nav__links")[0].firstElementChild.innerText;
// console.log(navbarPathItemText4);
//
// let navbarPathsLi = document.querySelector(".nav__item");
// console.log(navbarPathsLi);
//
// // window.addEventListener("event", func());
// window.addEventListener("load", ()=>{
//     console.log("window loaded");
// });
//
// // window.onload = func()
// window.onload = () => {
//     console.log("window onloaded")
// }
//

// =
//
// // 3. ve 4. eventlistener ekleme şekli ödev
//
// // let navbarPathsLi2 = document.querySelector(".nav__links").firstElementChild;
// // console.log("ul -> first li", navbarPathsLi2.innerText);
//
// // let navbarSignUpLi = document.querySelector(".nav__links").lastElementChild;
// // console.log("ul -> last li", navbarSignUpLi.innerText);
//
// let navbarInstructorsLi = document.querySelectorAll(".nav__item")[1];
// console.log(navbarInstructorsLi);
//
// navbarInstructorsLi.addEventListener("mouseover", ()=>{
//     navbarInstructorsLi.innerText = "Over Me!";
//     navbarInstructorsLi.style.color = "green";
//     navbarInstructorsLi.style.fontSize = "1.7rem";
// });
//
// navbarInstructorsLi.addEventListener("mouseout", ()=>{
//     navbarInstructorsLi.innerText = "Instructors";
//     navbarInstructorsLi.style.color = "#444444";
//     navbarInstructorsLi.style.fontSize = "1.7rem";
// });
//
//
// let navbarStudentsLi = document.querySelectorAll(".nav__item")[2];
// console.log(navbarStudentsLi);
// // // // 🔥🔥🔥🔥🔥  rgb random color(rgb(255,255,255) onclick of Students Navbar (CODE CHALLENGE)  🔥🔥🔥🔥🔥
//
// const randomNumber = () => Math.round(Math.random() * 255);
// const randomColor = () => `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
//
// //li
// navbarStudentsLi.addEventListener("click", (event)=>{
//     //stop bubbling
//     event.stopPropagation();
//     navbarStudentsLi.style.backgroundColor = randomColor();
// });
//
// //ul
// navbarStudentsLi.parentElement.addEventListener("click", (event)=>{
//     event.stopPropagation();
//     navbarStudentsLi.parentElement.style.backgroundColor = randomColor();
// });
//
// //header
// navbarStudentsLi.parentElement.parentElement.addEventListener("click", (event)=>{
//     navbarStudentsLi.parentElement.parentElement.style.backgroundColor = randomColor();
// });
//
// let lastName = document.querySelector("input[name = last_name]");
// let charSpan = document.getElementById("charCount");
//
// lastName.addEventListener("keyup", ()=>{
//     charSpan.innerText = lastName.value.length + "/40";
// });
//
// // last name input value 0 olduğunda span gözükmesin!! --> Homework <--
//
// let birthdayPicker = document.querySelector('[name=birthday]');
// birthdayPicker.addEventListener("change", () =>{
//     console.log(birthdayPicker.value);
//     console.log(new Date());
//     let year = new Date().getFullYear() - new Date(birthdayPicker.value).getFullYear();
//     alert("You are " + year + "years old.");
// });
//
// birthdayPicker.onchange = () =>{
//     console.log(birthdayPicker.value);
//     console.log(new Date());
//     let year = new Date().getFullYear() - new Date(birthdayPicker.value).getFullYear();
//     alert("You are " + year + "years old.");
// }










