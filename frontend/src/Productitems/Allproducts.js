import React from 'react'
import product1 from '../Allapi/products'
import Layout from '../component/Layout'

const Allproducts = () => {
  return (
   <Layout>
     <div className='container' style={{marginTop:"150px"}}>
    <div className='row my-4'>
        {
        product1.map((x)=>{
            return(
                <div className='col-lg-3 col-md-4 col-sm-6 my-5'>
<div className="card rounded" style={{width: '15rem'}}>
 <img src={x.image} style={{height:"13rem"}} className="card-img-top rounded" alt="..." />
<div className="card-body">

<p className='card-desc'>{x.description.slice(0,10)}....</p>

<p5 className='tt' >RS. {x.price} </p5>
 
 <p3><del className='text-muted yy'>RS. {x.oldprice}</del></p3>

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

export default Allproducts