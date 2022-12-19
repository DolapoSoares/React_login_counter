import axios from "axios"

const API_URL = "http://localhost:8080/api/auth/"

export const signUp = (userName:string, email:string, password:string) => {
    return axios.post(API_URL + "signup", {
    userName,
    email,
    password
});
}

export const login = (userName: string, password: string) => {
    return axios.post(API_URL + "signup", {
        userName,
        password
    })
    .then((resp) => {
        if(resp.data.access){
            localStorage.setItem('user', JSON.stringify(resp.data))
        }
        return resp.data
    })
}

export const logout = () => {
    localStorage.removeItem("user")
}

export const getCurrentUser = () => {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);
  
    return null;
  };