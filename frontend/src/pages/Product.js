import React from 'react'
import { Link } from 'react-router-dom'
import product1 from '../Allapi/products'

const Product = () => {
  return (
  <>

      <br/>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" to="#">All Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active"to='/accessories'>Accessories</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/games">Games</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active"to='/Led'>LED's</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active"to='/multiproducts'>MultiProducts</Link>
          </li>
    
          <li className="nav-item">
            <Link className="nav-link active"to='/men'>Men's Fashion</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active"to='/women'>Women's Fashion</Link>
          </li>
    
        </ul>
      </div>
    </div>
  </nav>

   
    <div className='container'>
    <div className='row my-4'>
        {
         product1.map((x)=>{
            return(
                <div className='col-lg-3 my-5'>
<div className="card rounded" style={{width: '17rem'}}>
 <img src={x.image} style={{height:"20rem"}} className="card-img-top rounded" alt="..." />
<div className="card-body">
<p className='card-title fw-bold'>{x.title}....</p>
<p className='card-desc'>{x.description.slice(0,10)}....</p>

<h2 className='card-price'>Rs: {x.price}</h2>

</div>
</div>

                </div>
            )
         })
        }
    </div>
</div>
  </>
  )
}

export default Product