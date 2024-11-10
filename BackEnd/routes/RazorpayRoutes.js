const express = require('express')
const { razorpayCreateOrder,getHex_Coins, razorpayVerifyOrder } = require('../controllers/RazorpayController')

const router = express.Router()


router.post('/create-order', razorpayCreateOrder)
router.post('/verify-order', razorpayVerifyOrder)

module.exports = router