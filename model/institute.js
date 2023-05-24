const mongoose = require("mongoose")

const instituteSchema = new mongoose.Schema({
    institutename:{
        type:String,
        required:[true, "enter your institute name"],
    },
    questionpapers:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"exam"
    }
})

module.exports = mongoose.model("institute",instituteSchema)