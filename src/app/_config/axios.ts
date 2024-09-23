// "use client";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3333";

// axios.interceptors.request.use(
//     (config) => {
//         const accessToken = localStorage.getItem("ACCESS_TOKEN");
//         if (accessToken) {
//             config.headers.Authorization = `Bearer ${accessToken}`;
//         }
//         return config;
//     },
//     (err) => Promise.reject(err)
// );

export default axios;
