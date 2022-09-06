import axios from "axios";

const getApi = axios.create({
    baseURL: 'http://192.168.1.168:8888/newsapp/api/'
})

export default getApi;
