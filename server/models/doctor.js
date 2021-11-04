const mongoose=require("mongoose");

const Doctor=mongoose.model('Doctor',{
    name:{type:String},
    email:{type:String},
    phone:{type:String},
    department:{type:String}
})

module.exports={Doctor}