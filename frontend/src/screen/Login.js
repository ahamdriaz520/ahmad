import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../context/auth'


const Login = () => {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
const navigate = useNavigate()
const [auth , setAuth] = useAuth();
    const LoginUser = async(e)=>{
      e.preventDefault()
 
    let result = await fetch('http://localhost:2020/login',{
      method:'post',
      body:JSON.stringify({ email , password}),
      headers:{
        "content-type":"application/json"
      }
    })
  
    toast.success("user Logged_In successfully 🙂")

    result = await result.json()
   if(result){
    setAuth({
      ...auth,
      user :result.user,
      token:result.token
    })
    localStorage.setItem('auth',JSON.stringify(result));
    navigate('/')
   }else{
    toast.error('Login Failed')
   }
  }
  
  return (
    <>
 <div title={'Login'}>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
</div>

<div className="container" style={{marginTop:"100px"}}>
  <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="card-group mb-5"  style={{width:"500px"}}>
        <div className="card p-4">
          <div className="card-body">
            <h1>Login</h1>
            <p className=" text-success">You need to Login first before doing any activity...!!!</p>
         
            <div className="input-group mb-3">
              <span className="input-group-addon"><i className="fa fa-user" style={{marginRight:'10px',marginTop:'10px'}} /></span>
              <input onChange={(e)=>setEmail(e.target.value)} type="text" name='email' className="form-control" placeholder="Useremail" required />
            </div>
            
            <div className="input-group mb-4">
              <span className="input-group-addon"><i className="fa fa-lock" style={{marginRight:'10px',marginTop:'10px'}}/></span>
              <input  onChange={(e)=>setPassword(e.target.value)} type="password" name='password' className="form-control" placeholder="Password" required />
            </div>
            <div className='login-popup-condition'>
            <input type='checkbox' required/> 
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
           </div>
            <div className="row">
              <div className="col-6">
                <button onClick={LoginUser} type="button" className="btn btn-primary px-4">Login</button>
              </div>
              <div className="col-6 text-right">
              <p>Create a new account? <span><Link to='/register'>Click here</Link></span></p>
              </div>
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

export default Login