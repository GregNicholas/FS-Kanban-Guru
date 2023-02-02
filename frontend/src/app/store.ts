import { configureStore } from "@reduxjs/toolkit"
// import boardsReducer from "../features/boardsSlice"
// import displayBoardReducer from "../features/displayBoardSlice"

export const store = configureStore({
    reducer: {
        // boards: boardsReducer,
        // board: displayBoardReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch