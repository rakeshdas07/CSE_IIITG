const express = require('express')

//controller functions
const {createNotice, getNotices, deleteNotices}=require('../controllers/NoticeController')

const router = express.Router()

router.post('/createNotice', createNotice)
router.get('/notices', getNotices)
router.delete('/deleteNotices/:id', deleteNotices)

module.exports = router