import axios from "axios";

export default axios.create( {
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '05ddcdaefef142d987644d10f9e75eda'
    }
})