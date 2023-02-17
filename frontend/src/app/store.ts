import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/auth/authSlice"
import boardReducer from "../features/boards/boardSlice"
// import displayBoardReducer from "../features/displayBoardSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        boards: boardReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch