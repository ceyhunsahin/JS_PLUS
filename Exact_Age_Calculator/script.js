let getYear = document.getElementById("years");
let getMonth = document.getElementById("months");
let getDay = document.getElementById("days");
let getHour = document.getElementById("hours");
let getMinute = document.getElementById("minutes");
let getSeconde = document.getElementById("seconds");
let countdown = document.getElementById("countdown")



const loading = document.querySelector(".loading");

window.addEventListener("load", () => {
    loading.style.display = 'block';
     setTimeout(() => {
        loading.style.display = "none";
        countdown.style.display = 'flex';
     }, 1000);
     let H2Elements = document.getElementsByTagName("h2");
     let H2Elements2 = countdown.querySelectorAll("h2");
     [...H2Elements].forEach(el =>{
            el.innerHTML ="00";
        });
})




let birthYear = document.querySelector("input[name = birthday]");
console.log(birthYear)

birthYear.addEventListener("change", () =>{
    let yearOfBirth = new Date().getFullYear() - new Date(birthYear.value).getFullYear()
    loading.style.display = "block";

    // setInterval(updateCountdown, 1000);
    setTimeout(()=>{
        loading.style.display = "none";
        countdown.style.display = "flex"
    }, 1000);
    document.body.style.backgroundImage = "url('https://source.unsplash.com/random')";

    let monthOfBirth = new Date().getMonth()- new Date(birthYear.value).getMonth()
    let dayOfBirth = new Date().getDay() - new Date(birthYear.value).getDay()
    console.log( dayOfBirth )
    let hourOfBirth = new Date().getHours() - new Date(birthYear.value).getHours()
    let minuteOfBirth = new Date().getMinutes()- new Date(birthYear.value).getMinutes()
    let secondeOfBirth = new Date().getSeconds() - new Date(birthYear.value).getSeconds()

    if (secondeOfBirth < 0) {
        secondeOfBirth += 60;
        minuteOfBirth--;
    }

    if (minuteOfBirth < 0) {
        minuteOfBirth += 60;
        hourOfBirth--;
    }

    if (hourOfBirth < 0) {
       hourOfBirth += 24;
        dayOfBirth--;
    }

    if (dayOfBirth < 0){
        dayOfBirth+= 30;
        monthOfBirth --;
    }

    if (monthOfBirth < 0){
        monthOfBirth += 12;
        yearOfBirth --;
    }
    getYear.innerText= yearOfBirth.toString().padStart(2, "0");
    getYear.style.backgroundColor = 'rgb(176,40,38)';
    getYear.style.display= 'inline';

    getMonth.innerText= monthOfBirth.toString().padStart(2, "0");
    getMonth.style.backgroundColor = 'rgb(176,40,38)';
    getMonth.style.display= 'inline';

    getDay.innerText= dayOfBirth.toString().padStart(2, "0");
    getDay.style.backgroundColor = 'rgb(176,40,38)';
    getDay.style.display= 'inline';

    getHour.innerText= hourOfBirth.toString().padStart(2, "0");
    getHour.style.backgroundColor = 'rgb(176,40,38)';
    getHour.style.display= 'inline';

    getMinute.innerText= minuteOfBirth.toString().padStart(2, "0");
    getMinute.style.backgroundColor = 'rgb(176,40,38)';
    getMinute.style.display= 'inline';
    //
    getSeconde.innerText= secondeOfBirth.toString().padStart(2, "0");
    getSeconde.style.backgroundColor = 'rgb(176,40,38)';
    getSeconde.style.display= 'inline';
})



