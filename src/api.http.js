import axios from "axios"

export const httpCreateCard = (data)=>{
    const url = "https://run.mocky.io/v3/bf2bf8df-6cbc-4042-a3c4-897333af2111"
    return axios.post(url,{data})
}