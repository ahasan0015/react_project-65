import axios from "axios";
// const baseApiUrl = "http://localhost/php-react-api/api/";
const baseApiUrl = "http://localhost/php-react-api/api/";

const api = axios.create({
    baseURL: baseApiUrl
    
});

export default api;