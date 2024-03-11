const express = require('express')
const router = express.Router()

const {upDateUser,addUser,deleteUser} =require('../controllers/userController')

router.put('/:id',upDateUser)
//
router.post('/:email',addUser)

router.delete('/:id',deleteUser)

module.exports = router;