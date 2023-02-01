const express = require('express')
const router = express.Router()
const { 
    getBoards, 
    createBoard, 
    updateBoard, 
    deleteBoard 
    } = require('../controllers/boardController')

// router.get('/', getBoards)
// router.post('/', createBoard)
router.route('/').get(getBoards).post(createBoard)
// router.put('/:id', updateBoard)
// router.delete('/:id', deleteBoard)
router.route('/:id').put(updateBoard).delete(deleteBoard)

module.exports = router