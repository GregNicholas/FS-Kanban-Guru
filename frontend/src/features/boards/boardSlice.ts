import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit'
import boardService from './boardService'
import { Board, Task, indexedBoard } from "../../types"

interface StateData {
    boards: Board[],
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
    message: string
}

const initialState: StateData = {
    boards: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const getBoards = createAsyncThunk('boards/getAll', async (_, thunkAPI: any) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await boardService.getBoards(token)
    } catch (err: any) {
        console.log("ERROR: ", err)
            const message = 
                (err.response && 
                  err.response.data && 
                  err.response.data.message) || 
                err.message || 
                err.toString()
            return thunkAPI.rejectWithValue(message)
    }
})

export const addBoard = 
    createAsyncThunk('boards/create', 
    async (boardData: Board, thunkAPI: any) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await boardService.addBoard(boardData, token)
        } catch (err: any) {
            console.log("ERROR: ", err)
            const message = 
                (err.response && 
                  err.response.data && 
                  err.response.data.message) || 
                err.message || 
                err.toString()
            return thunkAPI.rejectWithValue(message)
        }
    })

export const updateBoard = 
    createAsyncThunk('boards/update',
    async (boardData: Board, thunkAPI: any) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await boardService.updateBoard(boardData, token)
      } catch (err: any) {
          console.log("update Error: ", err)
          const message = 
            (err.response &&
              err.response.data &&
              err.response.data.message) ||
            err.message ||
            err.toString()
          return thunkAPI.rejectWithValue(message)
      }
    })

export const deleteBoard = 
    createAsyncThunk('boards/delete',
    async (id: string, thunkAPI: any) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await boardService.deleteBoard(id, token)
      } catch(err: any) {
        console.log("Error deleting board: ", err)
        const message = 
            (err.response && 
              err.response.data && 
              err.response.data.message) || 
            err.message || 
            err.toString()
        return thunkAPI.rejectWithValue(message)
      }
    })

export const boardSlice = createSlice({
    name: "board",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
          .addCase(addBoard.pending, (state) => {
              state.isLoading = true
          })
          .addCase(addBoard.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.boards.push(action.payload)
          })
          .addCase(addBoard.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload as string
          })
          .addCase(getBoards.pending, (state) => {
            state.isLoading = true
          })
          .addCase(getBoards.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.boards = action.payload
          })
          .addCase(getBoards.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload as string
          })
          .addCase(updateBoard.pending, (state) => {
            state.isLoading = true
          })
          .addCase(updateBoard.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.boards = state.boards.map((board) => {
              return board._id === action.payload._id ? action.payload : board})
          })
          .addCase(updateBoard.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload as string
          })
          .addCase(deleteBoard.pending, (state) => {
            state.isLoading = true
          })
          .addCase(deleteBoard.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.boards = state.boards.filter((board) => {
              return board._id !== action.payload._id})
          })
          .addCase(deleteBoard.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload as string
          })
    }
})

export const {reset} = boardSlice.actions
export default boardSlice.reducer