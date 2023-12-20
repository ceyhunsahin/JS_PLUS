/* const url = 'https://reqres.in/api/users?page=1';

//? ONCELIKLE GET ISLEMI
const tabloYeri = document.getElementById('table');
const loading = document.getElementById('loading');




window.onload = () =>{
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




        // API'ye POST islemi yapilacak, veri gonderilecek

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

// 2.METOT
const newgetApiUserList = async () => {

    try {
        //const resp = await axios(url) 1.metot
        const resp = await axios ({
            url : url,
            metot : "  get"
            //method : 'post',
            //data : bodyData
        })
        const {data : userListArray } = resp.data
        console.log('yeni usul', userListArray);

        if (userListArray.length===0){
            alert ('User List not found');
            removeLoading()
        }
        else {

        }



    } catch (error) {
        alert (error)
        //send errors to Api and Database (errorLogs table)
        //postErrorLog("userList", "getApiUserList2", error)
    }

    

}

newgetApiUserList() */


//? POST ISLEMI

const mail = document.querySelector("#email");
const password = document.querySelector("#password");
const sbmtButton = document.querySelector("#submit");


window.addEventListener('load', ()=> {

    mail.value = "eve.holt@reqres.in";
    password.value = "pistol";
})

sbmtButton.addEventListener('click', (e)=> {
    postCustomerRegister();
});

const postCustomerRegister = async () => {
   // alert("Customer data send")
   const bodyData = {
        "email" : mail.value,
        "password" : password.value
   };

   try {
    showLoading();
    const response = await axios ({
        url : "https://reqres.in/api/register",
        method : 'post',
        data : bodyData
        
    })
    removeLoading()
    const { data : userData } = response
    //const userData  = response.data
    console.log(userData );
    if (userData.token == undefined) {
        alert( "undefined");
        removeLoading()
    }
    else {
        localStorage.setItem("baseUrl",
        EncryptStringAES("https://reqres.in/api/register"));
        localStorage.setItem("apiKey", 
        EncryptStringAES(userData.token));
        removeLoading();
        // subenin kullanicilari kendi musterilerini gormek istiyorsa
        window.location.href = "userList.html" // sayfa ok ise bunu donmeli
        // Cok onemli !!!!!!!!!!!!!

    }

   } catch (err) {
    alert(err);
    removeLoading()
   }





}