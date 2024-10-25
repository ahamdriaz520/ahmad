import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Footer = () => {
  const [email , setEmail] = useState('')
    const subscribe = async(e)=>{
      e.preventDefault()
    let result = await fetch('http://localhost:2000/subscribe',{
      method:'post',
      body:JSON.stringify({email}),
      headers:{
        "content-type":"application/json"
      }
    })
    toast.success("Congratulations You Subscribed To Our Page Successfully 😍")
    result = await result.json()
 
  }
  return (
  <div>
    <div className='w'>
  <div className="footer-area">
    <div className="container ">
      <div className="row">
        <div className="col-md-2">
          <h4 className="footer-heading">E-Commerce</h4>
          <div className="footer-underline" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
        </div>
        <div className="col-md-2">
          <h4 className="footer-heading">Quick Links</h4>
          <div className="footer-underline" />
          <div className="mb-2"><a href className="text-dark">Home</a></div>
          <div className="mb-2"><a href className="text-dark">About Us</a></div>
          <div className="mb-2"><a href className="text-dark">Contact Us</a></div>
          <div className="mb-2"><a href className="text-dark">Blogs</a></div>
          <div className="mb-2"><a href className="text-dark">Sitemaps</a></div>
        </div>
        <div className="col-md-2">
          <h4 className="footer-heading">Shop Now</h4>
          <div className="footer-underline" />
          <div className="mb-2"><a href className="text-dark">Collections</a></div>
          <div className="mb-2"><a href className="text-dark">Trending Products</a></div>
          <div className="mb-2"><a href className="text-dark">New Arrivals Products</a></div>
          <div className="mb-2"><a href className="text-dark">Featured Products</a></div>
          <div className="mb-2"><a href className="text-dark">Cart</a></div>
        </div>
        <div className="col-md-3">
          <h4 className="footer-heading">Reach Us</h4>
          <div className="footer-underline" />
          <div className="mb-2">
            <p>
              <i className="fa fa-map-marker" /> #444, some main road, some area, some street, bangalore, india - 560077
            </p>
          </div>
          <div className="mb-2">
            <a href className="text-dark">
              <i className="fa fa-phone" /> +91 888-XXX-XXXX
            </a>
          </div>
          <div className="mb-2">
            <a href className="text-dark">
              <i className="fa fa-envelope" /> fundaofwebit@gmail.com
            </a>
          </div>
        </div>
<div className='col-md-3'>
<form>
  <div className="">
    <label htmlFor="exampleInputEmail1" className="form-label">Subscribe To Our Channel.....</label>
    <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={subscribe}>Subscribe</button>
  <button type="submit" className="btn btn-warning ms-2">Later</button>
</form>
</div>
      </div>
    </div>
  </div>
  <div className="copyright-area">
    <div className="container-fluid ">
      <div className="row">
        <div className="col-md-8">
          <p className='text-white' > © 2024 - Ecommerce-Project. All rights reserved.</p>
        </div>
        <div className="col-md-4">
          <div className="social-media">
            Get Connected:
            <a href><i className="text-white fa fa-facebook" /></a>
            <a href><i className="text-white fa fa-twitter" /></a>
            <a href><i className="text-white fa fa-instagram" /></a>
            <a href><i className="text-white fa fa-youtube" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>

   
  )
}

export default Footer