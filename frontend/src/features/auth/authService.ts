import axios from 'axios'

interface UserData {
    name: String,
    email: String,
    password: String
}

if(process.env.NODE_ENV === 'development'){
    axios.defaults.baseURL = `http://localhost:3080`
}

const API_URL = '/api/users/'

// Register user
const register = async (userData: UserData) => {
    console.log("in register authservice ")
    let response: any
    try{
        response = await axios.post(API_URL, userData)
    } catch (err:any){
        console.log("Register error : ", err)
    }
    
    console.log("RESP", response)
    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Login user
const login = async (userData: UserData) => {
    console.log("in login authService")
    const response = await axios.post(API_URL + 'login', userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Logout user
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    login,
    logout
}

export default authService