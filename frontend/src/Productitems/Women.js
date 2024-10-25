import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../component/Layout'

const Women = () => {
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
            <Link className="nav-link active" to="/dress">Women_dresses</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active"to='/gouns'>Women_Gouns</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/lehnga1">Women_Lehnga-1</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active"to='/lehnga2'>Women_Lehnga-2</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active"to='/saree'>Women_Saree's</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active"to='/kurta'>Women_Kurta</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active"to='/shirt'>Women_Shirts</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active"to='/jeans'>Women-Jeans</Link>
          </li>
    
        </ul>
      </div>
    </div>
  </nav>
    </Layout>
  )
}

export default Women