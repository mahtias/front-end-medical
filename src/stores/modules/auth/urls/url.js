import axios from 'axios'

 axios.create({
  //  baseURL: 'http://localhost:8088/api'
    baseURL: 'http://127.0.0.1:3333/api'

})

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')


export default axios