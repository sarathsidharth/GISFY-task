const mongoose=require("mongoose");

const Patient=mongoose.model('Patient',{
    name:{type:String},
    email:{type:String},
    phone:{type:String},
    doctor:{type:String},
    ward:{type:String},
})

module.exports={Patient}