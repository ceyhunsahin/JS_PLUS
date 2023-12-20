const url = 'https://reqres.in/api/users?page=1';

//? ONCELIKLE GET ISLEMI
const tabloYeri = document.getElementById('table');
const loading = document.getElementById('loading');




window.onload = () =>{
    alert ("Your Api Key is : " + DecryptStringAES(localStorage.getItem("apiKey")))
    getApiUserList()
    setInterval(getApiUserList,5000*2);
}
const getApiUserList = () => {
    showLoading()
    tabloYeri.innerHTML = firstLine
    const insideTable = document.querySelector('#table2  tbody:last-child')
    axios.get(url).then(res => {
        const person = res.data.data; // ilginc bir yontem oluyor destruction daha iyi
        
        [...person].forEach(item => {

            const tableRow = tableDesign(item); // Fonksiyonu çağırarak HTML satırını al
            insideTable.insertAdjacentHTML("beforeend",tableRow) ;
            
        });
    }).catch(err => console.log(err));

    removeLoading()
}

const showLoading = () => {
    loading.style.display = "block";
}

const removeLoading  = () => {
    setTimeout(()=> {
        loading.style.display = "none"
    }, 1000);
    
}


const tableDesign = (item) => {
    return `

                <tr>
                    <td>${item.id}</td>
                    <td><img src = "${item.avatar}"></td>
                    <td>${item.first_name}</td>
                    <td>${item.last_name}</td>
                    <td>${item.email}</td>
                </tr> `
} 

const firstLine = `
<div id = 'table2' >
    <table  >
        <tr>
            <th>Id</th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
        </tr>
    </table>
</div>`;

