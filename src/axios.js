import axios from "axios"


const instance = axios.create({
    baseURL:"https://schedulerspace.herokuapp.com"
})

export default instance