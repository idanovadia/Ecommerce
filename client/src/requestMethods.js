import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/";

var user = JSON.parse(localStorage.getItem("persist:root"))?.user;
var currentUser = user && JSON.parse(user).currentUser;
var TOKEN = currentUser?.accessToken;

export const updateUser = () => {
    console.log(JSON.parse(localStorage.getItem("persist:root"))?.user);
    user = JSON.parse(localStorage.getItem("persist:root"))?.user;
    currentUser = user && JSON.parse(user).currentUser;
    TOKEN = currentUser?.accessToken;
    console.log(TOKEN);
}

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
  });