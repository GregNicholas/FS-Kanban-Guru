import axios from 'axios'
import { Board, Task, indexedBoard } from "../../types"

const API_URL = '/api/boards/'
// const API_BASE_URL = process.env.NODE_ENV === 'development'
//     ? 'http://localhost:2121'
//     : ''

// const API_URL = `${API_BASE_URL}/api/boards/`

const getConfig = (token: string) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

const addBoard = async (boardData: Board, token: string) => {
    const config = getConfig(token);
    const response = await axios.post(API_URL, boardData, config)
    return response.data
}

const getBoards = async (token: string) => {
    const config = getConfig(token);
    const response = await axios.get(API_URL, config)
    return response.data
}

const updateBoard = async (boardData: Board, token: string) => {
    console.log("TO UPDATE BOARD: ", boardData)
    const boardId = boardData._id;
    const data = boardData;
    const config = getConfig(token)
    const response = await axios.put(API_URL+boardId, data, config)
    return response.data
}

const deleteBoard = async (id: string, token: string) => {
    const config = getConfig(token);
    const response = await axios.delete(API_URL + id, config)
    return response.data
}

const boardService = {
    addBoard,
    getBoards,
    updateBoard,
    deleteBoard,
}

export default boardService