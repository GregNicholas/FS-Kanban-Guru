const asyncHandler = require('express-async-handler')

const Board = require('../models/boardModel')

// @desc Get Boards
// @route GET /api/boards
// @access Private
const getBoards = asyncHandler(async (req, res) => {
    const boards = await Board.find()

    res.status(200).json(boards)
})

// @desc set Boards
// @route POST /api/boards
// @access Private
const createBoard = asyncHandler(async (req, res) => {
    console.log(req.body.columns)
    if(!req.body) {
        res.status(400)
        throw new Error('Please add board data')
    }
    // const board = await Board.create({
    //     name: "Board Two",
    //     columns: [
    //         {
    //             name: "column1",
    //             tasks: [
    //                 {
    //                     title: "first task",
    //                     description: "this is the way",
    //                     status: "pending",
    //                     subtasks: [
    //                         {
    //                             title: "get backend up",
    //                             isCompleted: false
    //                         }
    //                     ]
    //                 }
                    
    //             ]
    //         },
    //         {
    //             name: "ColumnTwo"
    //         }
    //     ]
    // })
    res.status(200).json({ message: 'create board'})
})

// @desc Update Board
// @route PUT /api/boards/:id
// @access Private
const updateBoard = asyncHandler(async (req, res) => {
    const board = await Board.findById(req.params.id)

    if(!board) {
        res.status(400)
        throw new Error('Board not found')
    }

    const updatedBoard = await Board.findByIdAndUpdate(req.params.id, 
        req.body, {
        new: true,
    })

    res.status(200).json(updatedBoard)
})

// @desc Delete Board
// @route GET /api/boards/:id
// @access Private
const deleteBoard = asyncHandler(async (req, res) => {
    const deleted = await Board.findByIdAndRemove(req.params.id)

    if(!deleted) {
        res.status(400)
        throw new Error('Board not found')
    }

    res.status(200).json({ message: `delete board ${req.params.id}`, board: deleted})
})

module.exports = {
    getBoards,
    createBoard,
    updateBoard,
    deleteBoard
}