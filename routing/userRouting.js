const express = require('express')
const router = express.Router()

const {upDateUser,createUser,deleteUser} =require('../controllers/userController')

router.put('/:id',upDateUser)
//
router.post('/:name',createUser)

router.delete('/:id',deleteUser)

module.exports = router;