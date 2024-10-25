import express from 'express'
import dotenv from 'dotenv'
import contactSchema from '../models/contactSchema.js';
dotenv.config();

export const ContactUs =  async (req, res)=>{
   try{
    const {name , email , message} =  req.body;
    if(!name){
       return res.status(200).send({ 
            success : false,
            message:'user name must br provided'
        })
    }
    if(!email){
        return res.status(200).send({
             success : false,
             message:'email must br provided'
         })
     }
     if(!message){
        return res.status(200).send({
             success : false,
             message:'Please Provide a message'
         })
     }
       const existinguser = await  contactSchema.findOne({email})
       if(existinguser){
        res.status(201).send({
            success : false,
            message:"You already Contact with us Please enter another email address"
        })
       
       }
       const user = await new contactSchema ({name , email, message}).save();
       res.status(200).send({
        success : true,
        message:'User registered successfully',
        user,
       })
   } catch (error) {
    console.log(error)
   res.status(501) .send({
    success : false,
    message:"Error in Contact"
   })  
}
}