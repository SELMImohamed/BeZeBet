import axios from 'axios';

const baseUrl = 'http://localhost:8000/';


export const login = async ( form ) =>{
    try{
        const res = await axios.post(`${baseUrl}auth/login`,form);
        return res;
    }
    catch(e){
        console.error(e);
    }
}