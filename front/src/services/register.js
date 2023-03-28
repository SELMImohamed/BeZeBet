import axios from 'axios';

const baseUrl = 'http://localhost:8000/';


 export const register = ( form ) =>{
    try{
        const res = axios.post(`${baseUrl}/register`, form);
        console.log(res);
        return res.data;
    }
    catch(e){
        console.error(e);
    }
}

