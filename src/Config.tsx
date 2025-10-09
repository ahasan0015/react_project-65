import axios from "axios";
// const baseApiUrl = "http://localhost/php-react-api/api/";
const baseApiUrl = "http://localhost/php-react-api/api/";
const baseUrl ="http://localhost/php-react-api/";
export {baseUrl}

const api = axios.create({
    baseURL: baseApiUrl,
    headers:{
        "Content-Type": "application/json",
        "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiQXNpYSIsImVtYWlsIjoiYXNpYUBleGFtcGxlLmNvbSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTc1OTk5MDc3OCwiZXhwIjoxNzYwNTk1NTc4fQ.o6qLi_H-QBuT3DKWtbO_1m1WgE9BJjrrkfsIty4h2do"
    }
    
});

export default api;