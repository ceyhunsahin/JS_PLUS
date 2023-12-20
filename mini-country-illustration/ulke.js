url = 'https://restcountries.com/v3.1/all';
url2 = 'https://restcountries.com/v3.1/alpha'
url3 = 'https://restcountries.com/v3.1/name'
let globalData;
const ulkeInfo = async () => {
    try {
        const countries = await fetch(url);
        if (!countries.ok) {
            throw new Error ("API'den veri gelmedi")
        }
        const dataCountry = await countries.json()
        globalData = dataCountry;
        return dataCountry

    } catch (err){
        console.log(err);
    }
}

ulkeInfo().then( data => {
    console.log(data);
    const ulkeOptions = document.querySelector('#ulke');
    const detayInfo = document.querySelector("#detay");
    console.log(detayInfo);

    [...data].forEach((u, index)=> {
        
        const nameCountry = u.name.common
        ulkeOptions.innerHTML += `<option value="${nameCountry}">${nameCountry}</option>`
        const selectedValue = ulkeOptions.value
        if (selectedValue === u.name.common){

            detayInfo.innerHTML = renderCountries(data[index]);
        }else {
            return selectedValue
        };
    });

    ulkeOptions.addEventListener('change', () => {
        const selectedValue = ulkeOptions.value
        //console.log(selectedValue);
        data.map((i, index) => {
            if (selectedValue === i.name.common){

                detayInfo.innerHTML = renderCountries(data[index]);
            }else {
                return selectedValue
            };
        });

       
    })
})



const renderCountries = (i) => {
    const keys = Object.keys(i.languages);
    return `
            <!-- Render Card -->
            <div class="card" style="width: 18rem;">
                <!-- Card Image -->
                <img src="${i.flags.png}" class="card-img-top" alt="Country Image">
                <!-- Card Body -->
                <div class="card-body">
                    <p class="card-title">Baskent => ${i.capital}</p>
                    <p class="card-text">Alt Bolge => ${i.subregion}</p>
                    <p class="card-text">Dil => ${i.languages[keys[0]]} </p>
                    <!-- Add more details as needed -->
                </div>
            </div>`
}


// her bir sekilde await etmeye calis


const getNeighbour = async (countryCode) => {

    const response = await fetch (`${url2}/${countryCode}`);
    const data = await response.json()
    return data[0]; 

}



const getCountry = async (countryName) => {

    const response = await fetch (`${url3}/${countryName}`);
    const data = await response.json()
    //return data [0]; 

    if (data[0].borders) {
        // bir bilgiden digerlerine ulasiyoruz, harika bir yontem
        for await (const item of data[0].borders){
            const neighbor = await getNeighbour(item)
            console.log(neighbor);
        }
    }

}

getCountry('Turkey')