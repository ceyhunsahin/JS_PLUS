import axios from 'axios';

url = 'https://restcountries.com/v3.1/all';
axios.get(url)
.then(res => {
    console.log(res);
    this.setState({allOf : res.data})
})
.catch( err => console.log(err))