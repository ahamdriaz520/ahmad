import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaAddressBook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoPhonePortrait } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
const Register = () => {
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [address , setAddress] = useState('')
  const [phone , setPhone] = useState('')
  const [password , setPassword] = useState('')

const navigate = useNavigate()
    const RegisterUser = async(e)=>{
      e.preventDefault()
 
      let result = await fetch('http://localhost:2020/user',{
        method:'post',
      body:JSON.stringify({name , email , address , phone , password}),
      headers:{
        "content-type":"application/json"
      }
    })
    
    result = await result.json()
   if(result){
    toast.success("Congratulations You Registered Successfully To Our Page 😍")
    navigate('/login')
   }else{
    toast.error("Something Wenrt Wrong...!!!")
   }
  }
  return (
    <>
 <div>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
</div>

<div className="container" style={{marginTop:"100px"}}>
  <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="card-group mb-5">
        <div className="card p-4">
          <div className="card-body">
            <h1>Register</h1>
            <p className=" text-success">You need to register first before doing any activity...!!!</p>
            <div className="input-group mb-3">
              <span className="input-group-addon"><FaUserAlt className="fw-bold" style={{marginRight:'10px',marginTop:'10px'}} /></span>
              <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control"  name="name" placeholder="Enter your name" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-addon"><MdEmail className="fw-bold" style={{marginRight:'10px',marginTop:'10px'}}/></span>
              <input onChange={(e)=>setEmail(e.target.value)} type="text" className="form-control" name='email' placeholder="Useremail" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-address">< FaAddressBook className="fw-bold" style={{marginRight:'10px',marginTop:'10px'}} /></span>
              <input onChange={(e)=>setAddress(e.target.value)}  type="text" className="form-control" name='address' placeholder="Useraddress" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-addon"><IoPhonePortrait className="fw-bold" style={{marginRight:'10px',marginTop:'10px'}} /></span>
              <input onChange={(e)=>setPhone(e.target.value)} type="text" className="form-control" name='phone' placeholder="Userphone" />
            </div>
            <div className="input-group mb-4">
              <span className="input-group-addon">< RiLockPasswordFill className="fw-bold" style={{marginRight:'10px',marginTop:'10px'}} /></span>
              <input  onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" name='password' placeholder="Password" />
            </div>
            <div className="row">
              <div className="col-6">
                <button onClick={RegisterUser} type="button" className="btn btn-primary px-4">Register</button>
              </div>
              <p>Already have an account? <span><Link to='/login'>Login here</Link></span></p>
              <div className="col-6 text-right">
                <button type="button" className="btn btn-link px-0">Forgot password?</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card text-white bg-primary py-5 d-md-down-none" style={{width: '44%'}}>
          <div className="card-body text-center">
            <div>
              <h2>Sign up</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button  type="button" className="btn btn-primary active mt-3">Register Now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Register