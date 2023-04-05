import axios from 'axios';

const baseUrl = 'http://localhost:8000/';

 export const register = async ( form ) =>{
    try{
        const res = await axios.post(`${baseUrl}auth/register`, form);
        console.log(res);
        return res.data;
    }
    catch(e){
        console.error(e);
    }
}

