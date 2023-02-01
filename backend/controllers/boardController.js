const asyncHandler = require('express-async-handler')

// @desc Get Boards
// @route GET /api/goals
// @access Private
const getBoards = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get Boards'})
})

// @desc set Boards
// @route POST /api/goals
// @access Private
const createBoard = asyncHandler(async (req, res) => {
    console.log(req.body.text)
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add board data')
    }
    res.status(200).json({ message: 'create board'})
})

// @desc Update Board
// @route PUT /api/goals/:id
// @access Private
const updateBoard = asyncHandler(async (req, res) => {
    
    res.status(200).json({ message: `update board ${req.params.id}`})
})

// @desc Delete Board
// @route GET /api/goals/:id
// @access Private
const deleteBoard = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete board ${req.params.id}`})
})

module.exports = {
    getBoards,
    createBoard,
    updateBoard,
    deleteBoard
}