import { URL_LOGIN } from "../config";
import axios from "axios";
import jwtDecode from "jwt-decode";

function authenticate(credentials) {
  return axios.post(URL_LOGIN, credentials)
  .then(res => res.data)
  .then(data => {
    window.localStorage.setItem("authToken",data.jwt)
    window.localStorage.setItem("username",data.user.username)
    axios.defaults.headers["Authorization"] = "Bearer " + data.jwt
  })
}

function isAuthenticated() {
  
  const token = window.localStorage.getItem("authToken")

  if(token) {
    const {exp} = jwtDecode(token)
    return(exp * 1000 > new Date().getTime()) // exp est en secondes. On le multiplie par 1000 pour l'avoir en millisecondes.
  }

  return false
}

function logout() {
  window.localStorage.removeItem('authToken')
  window.localStorage.removeItem('username')
  delete axios.defaults.headers["Authorization"]
}


export default {
  authenticate,
  isAuthenticated,
  logout
};