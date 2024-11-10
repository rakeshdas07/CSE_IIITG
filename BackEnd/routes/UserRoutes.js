const express = require('express')

//controller functions
const {register, login, adminLogin}=require('../controllers/UserController')

const router = express.Router()

//signup route
router.post('/register', register)

//login route
router.post('/login', login)

router.post('/admin-login', adminLogin)



module.exports = router