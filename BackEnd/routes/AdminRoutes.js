const express = require('express')

//controller functions
const {createMenus, getMenus}=require('../controllers/AdminController')

const router = express.Router()

router.post('/createMenus', createMenus)
router.get('/getMenus', getMenus)

module.exports = router