const mongoose =require('mongoose');

const userSchema= new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true,
        Range:10
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
})

const User= new mongoose.model("Contact",userSchema);

module.exports=User