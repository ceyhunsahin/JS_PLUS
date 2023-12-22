
const APPID="b8facdfbb8a5759f15db3bb11e64e453";

/* window.onload = () =>{
    weatherInformation()
    //setInterval(getApiUserList,5000*2);
} */


const searchCity = document.querySelector("#search");
const heading = document.getElementsByClassName('heading');
const loc = document.getElementsByClassName('location');
const tempValue = document.getElementsByClassName("temp-value");
const sunset = document.querySelector("#sunset");
const sunrise = document.querySelector("#sunrise");
const weatherCard = document.getElementsByClassName("top");
console.log(weatherCard[0].style.background );


searchCity.addEventListener('keydown', (e) => {

        if (e.key === 'Enter') {
            q =  searchCity.value

            weatherInformation(q)

        } 


});


const weatherInformation = async (q) => {


    try
        {const response = await axios ({
            url : `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${APPID}`,
            method : "get"
            
        });
        const {data : resp} = response;


        /* const cityEnters = localStorage.setItem('cityName', resp.name) ;
        console.log(JSON.parse(cityEnters)); */
        let cityEnterName = JSON.parse(localStorage.getItem('cityEnterName') || '[]');

        if (!cityEnterName.includes(resp)) {
            cityEnterName.push(resp);
            localStorage.setItem('cityEnterName', JSON.stringify(cityEnterName));
            

        }

        console.log('cityEnterName;',cityEnterName);
        CardFullfill(resp);

        cityEnterName.forEach((temp) => {

            console.log("temp",temp);

            const cardHTML = CardFullfill(temp);
            const cardElement = document.createElement('div');
            cardElement.innerHTML = cardHTML;
            cards.appendChild(cardElement.firstChild);

            /* 
            document.getElementsById("cards").appendChild(template); */

        })

    } catch(error) {
        alert ('Aradiginiz bir sehir degildir, Lutfen tekrar deneyiniz');
    }

    
    
    
    
}

function unixZamaniniSaatVeDakikayaCevir(unixZaman) {
    // Unix zamanını milisaniyeye çevir ve Date nesnesi oluştur
    const tarih = new Date(unixZaman * 1000);

    // Saati ve dakikayı UTC olarak al
    const saat = tarih.getUTCHours();
    const dakika = tarih.getUTCMinutes();

    // Saati ve dakikayı formatla (ör: "07:05")
    return saat.toString().padStart(2, '0') + ':' + dakika.toString().padStart(2, '0');
}

function CardFullfill(resp) {

    heading[0].innerText = resp.weather[0].description.charAt(0).toUpperCase()+resp.weather[0].description.slice(1,100);

    const gifs = resp.weather[0].description.split (' ')

    if (gifs.includes("rain")) {
            weatherCard[0].style.backgroundImage = "url('assets/rain.gif')";

    } else if (gifs.includes("snow")) {
            weatherCard[0].style.backgroundImage = "url('assets/snow.gif')";

    }
    else if (gifs.includes("clear")) {
            weatherCard[0].style.backgroundImage = "url('assets/sun.gif')";
        } 
    else if (gifs.includes("clouds")) {
            weatherCard[0].style.backgroundImage = "url('assets/clouds.gif')";

        }
    weatherCard[0].style.backgroundSize = "cover"; // veya "100% 100%"
    weatherCard[0].style.backgroundRepeat = "no-repeat";
    weatherCard[0].style.backgroundPosition = "center";


    loc.location.innerText = resp.name

    const { temp : degree } = resp.main

    tempValue[0].innerText = (degree - 273.15).toFixed(0)

    sunrise.innerText  = unixZamaniniSaatVeDakikayaCevir(resp.sys.sunrise);

    sunset.innerText  = unixZamaniniSaatVeDakikayaCevir(resp.sys.sunset);

    
    // Klonlanan kartın içeriğini güncelle
    template.querySelector('.heading').textContent = data.heading;
    template.querySelector('.location').textContent = data.location;
    template.querySelector('.temp-value').textContent = data.tempValue;
        // Diğer özellikler de benzer şekilde güncellenebilir
    
        // Eşsiz ID'ler atayın veya ID'leri kaldırın
    template.querySelector('#location').id = 'location-' + index;
    template.querySelector('#sunrise').id = 'sunrise-' + index;
    template.querySelector('#sunset').id = 'sunset-' + index;
    
    return template;
}