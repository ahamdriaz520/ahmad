import express from 'express'
import userSchema from '../models/userSchema.js';
import { hashPassword } from '../Authentication/UserAuth.js';
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config();

export const LoginUser =  async (req, res,next)=>{
 const {email,password} = req.body;
 if(!email){
    return next(new Error("Email is required"));
 }
 if(!password){
    return next(new Error("Password is required"));
}
let user =await userSchema.findOne({ email: email});
if(!user){
     return next(new Error("Invalid Email or Password"));
}
const comparePassword = bcrypt.compare(password,hashPassword, user.password);
if(comparePassword){
    return next(new Error("Invalid Email or Password"));
}
const token = jwt.sign({payload:user}, process.env.SECRET_KEY,{expiresIn:"2h"});
req.token = token;
res.send({
    user,
    token,
    message:"Logged _in successfully"
})
}
export const GetallUsers =  async (req, res)=>{
   try {
    const {name , email ,address  , phone , password} =  req.body;
    if(!name){
       return res.status(200).send({
            success : false,
            message:'user name must br provided'
        })
    }
    if(!name){
        return res.status(200).send({
             success : false,
             message:'email must br provided'
         })
     }
     if(!address){
        return res.status(200).send({
             success : false,
             message:'address must br provided'
         })
     }
     if(!phone){
        return res.status(200).send({
             success : false,
             message:'Phone Number must br provided'
         })
     }
     if(!password){
        return res.status(200).send({
             success : false,
             message:'Password must br provided'
         })
     }
       const existinguser =await  userSchema.findOne({email})
       if(existinguser){
        res.status(201).send({
            success : false,
            message:"User already exists Please try a different Login"
        })
       }
       const hashedPassword = await hashPassword(password);
       const user = await new userSchema ({name , email, address ,phone , password:hashedPassword}).save();
       res.status(200).send({
        success : true,
        message:'User registered successfully',
        user
       })
   } catch (error) {
    console.log(error)
   res.status(501) .send({
    success : false,
    message:"Error in Registration"
   })  
}
}
