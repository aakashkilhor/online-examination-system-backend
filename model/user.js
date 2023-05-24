const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        default:null,
    },
    lastname:{
        type:String,
        default:null,
    },
    email:{
        type:String,
        unique:true,
        required:[true, 'email not valid']
    },
    password:{
        type:String,
        
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:user,
    },
    institue:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"institute",
        required:true
    },
    token:{
        type:String,
    },
})

module.exports = mongoose.model("user",userSchema)