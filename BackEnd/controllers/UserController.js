const UserSchema= require('../models/StudentUsers')


const register= async(req, res)=>{
    try {
        const {email, name, rollno, password}= req.body


        const mail=await UserSchema.findOne({email: email})
        if(mail){
            throw Error('Email already exists.')
        }
        const user=await UserSchema.create({email, name, rollno, password})
        res.status(200).json({message: `New user created: ${user}`})
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

const login= async(req, res)=>{
    try {
        const {email, rollno, password}= req.body


        const mail=await UserSchema.findOne({email: email})
        if(!mail){
            throw Error('Email does not exists.')
        }
        const roll=await UserSchema.findOne({rollno, email})
        if(!roll){
            throw Error('Roll number does not exists.')
        }
        const pass=await UserSchema.findOne({password, email})
        if(!pass){
            throw Error('Password incorrect.')
        }
        res.status(200).json({message: `Login sucessful, ${mail}`})
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

const adminLogin= async(req, res)=>{
    try{
        const {email, pass}=req.body
        if(email!==process.env.ADMIN_EMAIL)
        {
            throw Error('Incorrect email.')
        }
        if(pass!==process.env.ADMIN_PASSWORD)
        {
                throw Error('Incorrect password.')
        }
        res.status(200).json({message: `Login sucessful, ${email}`})
    }
    catch{
        res.status(400).json({error: err.message})
    }
}

module.exports={register, login, adminLogin}
