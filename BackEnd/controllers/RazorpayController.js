const Razorpay = require('razorpay');
const User = require('../models/StudentUsers');
const Price = require('../models/Admin')
const crypto = require('crypto')
const date = new Date()

const razorpay = new Razorpay({
    key_id: process.env.RAZOR_PAY_KEY_ID,
    key_secret: process.env.RAZOR_PAY_KEY_SECRET
});

const razorpayCreateOrder = async(req, res) => {

    const { amount } = req.body

    const options = {
        amount: amount * 100,  // amount in the smallest currency unit (e.g., paise for INR)
        currency: 'INR',
        receipt: date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
    };

    try {
        razorpay.orders.create(options, function(error, order) {
            if(error) {
                res.status(400).json({error: 'something went wrong!'})
            }
            
            res.status(200).json({order: order})
        })
    } catch (error) {
        res.status(500).json({error: 'Internal server error!'})
    }
}

const razorpayVerifyOrder = async (req, res) => {

    try {

        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body

        const sign = razorpay_order_id + '|' + razorpay_payment_id
        const expected_sign = crypto.createHmac('sha256', process.env.RAZOR_PAY_KEY_SECRET).update(sign.toString()).digest('hex')

        if(razorpay_signature === expected_sign) {
            res.status(200).json({message: 'Payment verified successfully!'})
        }
        else {
            res.status(400).json({message: 'Invalid payment signature!'})
        }
        
    } catch (error) {
        res.status(500).json({error: 'Internal server error!'})
    }
}


module.exports = { razorpayCreateOrder, razorpayVerifyOrder }