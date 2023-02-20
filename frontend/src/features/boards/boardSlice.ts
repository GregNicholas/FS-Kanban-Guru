import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit'
import boardService from './boardService'
import { Board, Task, indexedBoard } from "../../types"

interface boardsState {
    value: Board[]
}

interface StateData {
    boards: Board[],
    // indexedBoard?
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
        //   .addCase(updateBoard.pending, (state) => {
        //     state.isLoading = true
        //   })
        //   .addCase(updateBoard.fulfilled, (state, action) => {
        //     state.isLoading = false
        //     state.isSuccess = true
        //     state.groceries = state.groceries.map((board) => {
        //       return board._id === action.payload._id ? action.payload : board})
        //   })
        //   .addCase(updateBoard.rejected, (state, action) => {
        //     state.isLoading = false
        //     state.isError = true
        //     state.message = action.payload
        //   })
        //   .addCase(deleteBoard.pending, (state) => {
        //     state.isLoading = true
        //   })
        //   .addCase(deleteBoard.fulfilled, (state, action) => {
        //     state.isLoading = false
        //     state.isSuccess = true
        //     state.groceries = state.groceries.filter((grocery) => {
        //       return grocery._id !== action.payload.id})
        //   })
        //   .addCase(deleteBoard.rejected, (state, action) => {
        //     state.isLoading = false
        //     state.isError = true
        //     state.message = action.payload
        //   })
    }
        // getExistingBoards: (state, action: PayloadAction<Board[]>) => {
        //     state.value = action.payload
        // },
        // addBoard: (state, action: PayloadAction<Board>) => {
        //     state.value.push(action.payload)
        // },
        // editBoard: (state, action: PayloadAction<indexedBoard>) => {
        //     state.value = state.value.map((board, index) => {
        //         return index !== action.payload.id ? board
        //             : action.payload
        //     })
        // },
        // deleteBoard: (state, action: PayloadAction<string>) => {
        //     state.value = state.value.filter(board => board.name !== action.payload)
        // },
        // addTask: (state, action: PayloadAction<{ task: Task; boardName: string; columnName: string }>) => {
        //     const board = state.value.find(board => board.name === action.payload.boardName)
        //     const column = board?.columns.find(column => column.name === action.payload.task.status)
        //     column?.tasks.unshift(action.payload.task)
        // },
        // editTask: (state, action: PayloadAction<{ prevTaskTitle: string; task: Task; boardName: string; columnName: string }>) =>{
        //     const board = state.value.find(board => board.name === action.payload.boardName)
        //     const column = board?.columns.find(column => column.name === action.payload.task.status)
        //     const taskIndex = column?.tasks.map(task => task.title).indexOf(action.payload.prevTaskTitle)
        //     if(column && typeof taskIndex === "number" && taskIndex >= 0){
        //         column.tasks[taskIndex] = action.payload.task
        //     }
        // },
        // editSubtasks: (state, action: PayloadAction<{ task: Task; index: number; boardName: string; columnName: string }>) => {
        //     const board = state.value.find(board => board.name === action.payload.boardName)
        //     const column = board?.columns.find(column => {
        //         return column.name === action.payload.columnName
        //     })
        //     const task = column?.tasks[action.payload.index]
        //     if(task){
        //         task.subtasks = action.payload.task.subtasks
        //     }
        // },
        // changeTaskStatus: (state, action: PayloadAction<{ taskStatus: string; index: number; boardName: string; columnName: string }>) => {
        //     const board = state.value.find(board => board.name === action.payload.boardName)
        //     const column = board?.columns.find(column => {
        //         return column.name === action.payload.columnName
        //     })
        //     const task = column?.tasks[action.payload.index]
        //     if(task){
        //         task.status = action.payload.taskStatus
        //     }
        // },
        // deleteTask: (state, action: PayloadAction<{ taskTitle: string; boardName: string; columnName: string }>) => {
        //     const board = state.value.find(board => board.name === action.payload.boardName)
        //     const column = board?.columns.find(column => column.name === action.payload.columnName)
        //     const taskIndex = column?.tasks.map(task => task.title).indexOf(action.payload.taskTitle)
        //     if(typeof taskIndex === "number"){
        //         column?.tasks.splice(taskIndex, 1)
        //     }
        // }
    
})

// export const { 
//     getBoards, 
//     addBoard, 
//     // editBoard, deleteBoard, addTask, editTask, editSubtasks, changeTaskStatus, deleteTask 
// } = boardsSlice.actions

export const {reset} = boardSlice.actions
export default boardSlice.reducer