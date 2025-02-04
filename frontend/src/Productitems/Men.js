import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../component/Layout'

const Men = () => {
  return (
    <Layout>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" to="/menjeans">Men_Jeans</Link>
          </li>
         
          <li className="nav-item">
            <Link className="nav-link active" to="/kurta1">Kurta1</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active"to='/pants'>Men_Pants</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active"to='/menshirt'>Men_Shirts</Link>
          </li>
    
          <li className="nav-item">
            <Link className="nav-link active"to='/shoes'>Men_Shoes</Link>
          </li>
        
    
        </ul>
      </div>
    </div>
  </nav>
    </Layout>
  )
}

export default Men