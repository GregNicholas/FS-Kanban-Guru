import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface displayBoardState {
    value: number
}

const initialState: displayBoardState = {
    value: 0
}

export const displayBoardSlice = createSlice({
    name: "board",
    initialState,
    reducers: {
        setDisplayBoard: (state, action: PayloadAction<number>) => {
            state.value = action.payload
        }
    }
})

export const { setDisplayBoard } = displayBoardSlice.actions

export default displayBoardSlice.reducer