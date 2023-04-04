import axios from "axios";

const baseUrl = "http://localhost:8000/";

export const bet = async (form) => {
  try {
    const res = await axios.post(`${baseUrl}bet/createBet`, form);
    // console.log(res);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const getAllBet = async () =>{
    try{
        const res = await axios.get(`${baseUrl}bet/getAllBet`);
        // console.log(res);
        return res;
    }
    catch(e){
        console.error(e);
    }
}