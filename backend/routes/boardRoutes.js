const express = require('express')
const router = express.Router()
const { 
    getBoards, 
    createBoard, 
    updateBoard, 
    deleteBoard 
    } = require('../controllers/boardController')

const { protect } = require('../middleware/authMiddleware')

// router.get('/', getBoards)
// router.post('/', createBoard)
router.route('/').get(protect, getBoards).post(protect, createBoard)
// router.put('/:id', updateBoard)
// router.delete('/:id', deleteBoard)
router.route('/:id').put(protect, updateBoard).delete(protect, deleteBoard)

module.exports = router