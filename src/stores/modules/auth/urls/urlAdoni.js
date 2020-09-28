import axios from 'axios'

 export default axios.create({
   // baseURL: 'http://localhost:8088/api'
   baseURL: 'http://127.0.0.1:4000/api/auth'

})

