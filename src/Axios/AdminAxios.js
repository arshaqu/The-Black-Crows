import axios from 'axios';

const adminAxios = axios.create({
  baseURL: 'https://13.60.192.35/api', 
});

adminAxios.interceptors.request.use(
  (config) => {
    const AdToken = localStorage.getItem('AdminToken'); 
    console.log(AdToken);
    
    if (AdToken) {
      config.headers['Authorization'] = `Bearer ${AdToken}`; 
    }
    return config; 
  },
  (error) => {
    return Promise.reject(error); 
  }
);

export default adminAxios;
