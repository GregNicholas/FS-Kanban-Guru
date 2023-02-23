import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'

interface RegisterData {
    name: string,
    email: string,
    password: string
}

interface LoginData {
    email: string,
    password: string
}

interface User {
    name: string,
    token: string,
    email: string,
    _id: string
  }

interface StateData {
    user: User | null,
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
    message: string
}

// Get user from local storage
let user: User | null = JSON.parse(localStorage.getItem('user') as string)
// if(user){
//     user = JSON.parse(user)
// }

const initialState : StateData = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Register user
export const register = createAsyncThunk('auth/register', 
    async (user: RegisterData, thunkAPI) => {
        console.log("We're in register in authSlice")
        try {
            return await authService.register(user)
        } catch (err:any) {
            const message = (err.response && err.response.data &&
                err.response.data.message) || err.message || err.toString()
            return thunkAPI.rejectWithValue(message)
        }
    })

// Login
export const login = createAsyncThunk('auth/login',
    async (user: LoginData, thunkAPI) => {
        try {
            return await authService.login(user)
        } catch(err:any) {
            const message = (err.response && err.response.data &&
                err.response.data.message) || err.message || err.toString()
            return thunkAPI.rejectWithValue(message)
        }
    })

// Logout
export const logout = 
    createAsyncThunk('auth/logout', async () => {
        authService.logout()
    })

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state: StateData) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    // extra reducers for async actions
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
                state.user = null
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
                state.user = null
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null
            })
    }
})

export const {reset} = authSlice.actions
export default authSlice.reducer