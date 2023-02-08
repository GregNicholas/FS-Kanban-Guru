import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { response } from 'express'
import authService from './authService'

interface UserData {
    name: String,
    email: String,
    password: String
}

// Get user from local storage
let user = localStorage.getItem('user')
if(user){
    user = JSON.parse(user)
}

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Register user
export const register = createAsyncThunk('auth/register', 
    async (user: UserData, thunkAPI) => {
        try {
            return await authService.register(user)
        } catch (err:any) {
            const message = (err.response && err.response.data &&
                err.response.data.message) || err.message || err.toString()
            return thunkAPI.rejectWithValue(message)
        }
    })

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    // extra reducers for async actions
    extraReducers: () => {}
})

export const {reset} = authSlice.actions
export default authSlice.reducer