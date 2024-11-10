const mongoose= require("mongoose")
const Schema =  mongoose.Schema

const adminSchema = new Schema({
    Breakfast:{
        Veg:{
            Menus:[{
                type: String,
                required: true,
            }],
            Prices:{
                type: Number,
                required: true,
            },
            Feedback:{
                type: String, 
            },
            Attendance:{
                type: Number,
            },
        },
        NonVeg:{
            Menus:[{
                type: String,
                required: true,
            }],
            Prices:{
                type: Number,
                required: true,
            },
            Feedback:{
                type: String, 
            },
            Attendance:{
                type: Number,
            },
        },
    },
    Lunch:{
        Veg:{
            Menus:[{
                type: String,
                required: true,
            }],
            Prices:{
                type: Number,
                required: true,
            },
            Feedback:{
                type: String, 
            },
            Attendance:{
                type: Number,
            },
        },
        NonVeg:{
            Menus:[{
                type: String,
                required: true,
            }],
            Prices:{
                type: Number,
                required: true,
            },
            Feedback:{
                type: String, 
            },
            Attendance:{
                type: Number,
            },
        },
    },
    Dinner:{
        Veg:{
            Menus:[{
                type: String,
                required: true,
            }],
            Prices:{
                type: Number,
                required: true,
            },
            Feedback:{
                type: String, 
            },
            Attendance:{
                type: Number,
            },
        },
        NonVeg:{
            Menus:[{
                type: String,
                required: true,
            }],
            Prices:{
                type: Number,
                required: true,
            },
            Feedback:{
                type: String, 
            },
            Attendance:{
                type: Number,
            },
        }
    }
},{timestamps:true})
module.exports = mongoose.model('Admin_User', adminSchema)