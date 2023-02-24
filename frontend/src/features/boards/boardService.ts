import axios from 'axios'
import { Board, Task, indexedBoard } from "../../types"

// axios.defaults.baseURL = `http://localhost:2121`
// const API_URL = '/api/boards/'
const API_BASE_URL = process.env.NODE_ENV === 'development'
    ? 'http://localhost:2121'
    : 'https://your-production-api-url.com'

const API_URL = `${API_BASE_URL}/api/boards/`

const addBoard = async (boardData: Board, token: string) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, boardData, config)
    return response.data
}

const getBoards = async (token: string) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)
    return response.data
}

const deleteBoard = async (id: string, token: string) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + id, config)
    return response.data
}

// const updateGrocery = async (updateData, token) => {
//     const groceryId = updateData[0]
//     const data = updateData[1]
//     const config = {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     }
//     const response = await axios.put(API_URL + groceryId, data, config)
//     return response.data
// }

// const deleteGrocery = async (groceryId, token) => {
//     const config = {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     }
//     const response = await axios.delete(API_URL + groceryId, config)
//     return response.data
// }


const boardService = {
    addBoard,
    getBoards,
    // updateBoard,
    deleteBoard,
}

export default boardService