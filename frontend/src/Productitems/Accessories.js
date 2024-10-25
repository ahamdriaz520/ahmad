import React from 'react'
import accessories from '../Allapi/Accessories'
import Layout from '../component/Layout'


const Accessories = () => {
  return (
    
<Layout>
<div className='container' style={{marginTop:"150px"}}>
    <div className='row my-4'>
        {
         accessories.map((x)=>{
            return(
                <div className='col-lg-3 col-md-4 col-sm-6 my-5'>
<div className="card rounded" style={{width: '17rem'}}>
 <img src={x.image} style={{height:"20rem"}} className="card-img-top rounded" alt="..." />
<div className="card-body">
<p className='card-title fw-bold'>{x.title.slice(0,10)}....</p>
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
</Layout>
  )
}

export default Accessories