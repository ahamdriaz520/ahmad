import React from 'react'
import { Link } from 'react-router-dom'

const Errorpage = () => {
  return (
    <div className='container-fluid vv'>
      <h3 className='mt-5 fw-bold display-4 EE'>oops! Page not Found</h3>
      <h1 className='WW'>404</h1>
      <p1 className="RR">We can't find the page you're looking for.</p1>
      <br/><br/>
      <Link to="/">Go back to Homepage</Link>
       </div>
  )
}

export default Errorpage