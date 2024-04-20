<<<<<<< HEAD
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL 

const axiosInstance = axios.create({
    baseURL: API_URL,
})

export default axiosInstance;
=======
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

const axiosInstance = axios.create({
  baseURL: API_URL,
})

export default axiosInstance
>>>>>>> ec63d8d00f1be65aab241b4bc4204bf560f0344a
