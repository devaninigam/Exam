import axios from "axios";
import { BASE_URL, DELETE_URL_API, GET_URL_API } from "../../Constant";
import { DELETE_PRODUCT } from '../Action/Action';
import { useEffect } from "react";

export function GetProductUrl() {
  return axios.get(BASE_URL+GET_URL_API).then((res) =>{
    const status = res.status;
    const data = res.data;
    console.log("HELLLLLLLLL")
    console.log(data ,"line")

    return({
      status , 
      data
    })
  })
  
}

export const deleteProduct=(ID)=>{
  axios.delete(`${BASE_URL}${DELETE_URL_API}/${ID}`).then((res)=>{
    console.log(res);
  })
}