import axios from "axios";

const api = axios.create({ baseURL: "https://linked-posts.routemisr.com" });

api.interceptors.request.use(
    config => {
        const token = localStorage.getItem("userToken");

        if(token) {
            config.headers.token = token;
        }
        return config;
    },
    err => {
        console.error("Error: ",err);
    }
)
api.interceptors.response.use(
    response => response,
    err => {
        if(err.response && err.response.status === 403) {
            console.error("unauthorized, token");
        }
        return Promise.reject(err)
    }
)
export default api