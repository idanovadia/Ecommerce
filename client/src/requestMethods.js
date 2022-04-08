import axios from 'axios'

const BASE_URL = "http://localhost:8080/api/";
const TOKEN = () => {
    console.log(localStorage.getItem("persist:root").user);
    const t = localStorage.getItem("persist:root").user
        ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
        : null
    return t;
}

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN()}`}
});