import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true 
    },
    message:{
        type:String,
        required:true,
        trim:true,
    },
    role:{
        type:Number,
        default : 0
    },
},
   {timestamp:true}
)

export default  mongoose.model('/contacts' , contactSchema);