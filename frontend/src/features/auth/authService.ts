import axios from 'axios'

interface RegisterData {
    name: string,
    email: string,
    password: string
}

interface LoginData {
    email: string,
    password: string
}

if(process.env.NODE_ENV === 'development'){
    axios.defaults.baseURL = `http://localhost:2121`
}

const API_URL = '/api/users/'

// Register user
const register = async (userData: RegisterData) => {
    try {
        const response = await axios.post(API_URL, userData)
        localStorage.setItem('user', JSON.stringify(response.data))
        return response.data
    } catch (err) {
        console.error('Register error:', err)
        throw new Error('Failed to register user')
    }
}

// Login user
const login = async (userData: LoginData) => {
    try {
        const response = await axios.post(`${API_URL}login`, userData)
        localStorage.setItem('user', JSON.stringify(response.data))
        return response.data
    } catch (err) {
        console.error('Login error:', err)
        throw new Error('Failed to login')
    }
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
