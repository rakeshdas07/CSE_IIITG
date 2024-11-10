const mongoose = require('mongoose');

// Define the notice schema
const noticeSchema = new mongoose.Schema({
    content: {
    type: String,
    required: true,
  },
},{timestamps:true})
module.exports = mongoose.model('Notice', noticeSchema)