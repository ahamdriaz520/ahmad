import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true 
    },
    address:{
        type:String,
        required:true,
        trim:true
    },
     phone:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:Number,
        default : 0
    },
},
   {timestamp:true}
)
export default  mongoose.model('/user' , userSchema);