import axios from 'axios'

interface UserData {
    name: String,
    email: String,
    password: String
}

const API_URL = '/api/users/'

// Register user
const register = async (userData: UserData) => {
    const response = await axios.post(API_URL, userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const authService = {
    register
}

export default authService