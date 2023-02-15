import axios from 'axios'

interface UserData {
    name: string,
    email: string,
    password: string
}

const API_BASE_URL = process.env.NODE_ENV === 'development'
    ? 'http://localhost:2121'
    : 'https://your-production-api-url.com'

const API_URL = `${API_BASE_URL}/api/users`

// Register user
const register = async (userData: UserData) => {
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
const login = async (userData: UserData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData)
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
