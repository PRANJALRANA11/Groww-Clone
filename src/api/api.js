import axios from "axios"
const BACKEND_PROXY = "https://red-waiter-ccpzj.pwskills.app:5000";

export const getSearchResult=async(querry)=>{
        try {
           const response = await axios.get(`${BACKEND_PROXY}/api/search/${querry}`);
           return response.data;
        } catch (error) {
          console.log(error.message)  
        }
    }
 

