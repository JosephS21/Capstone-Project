import axios from "axios";


export default axios.create({
    baseURL:'https://api.rawg.io/api/',
    params:{
        key: '6f8da763846e41e5afeb83c7d5864f40'
    }
})