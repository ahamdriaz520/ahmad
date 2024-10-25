import React from 'react'
import Layout from '../component/Layout'
import { accessory } from '../Allapi/accessory'
import { Link } from 'react-router-dom'
const Accessory = () => {
  return (
    <Layout title={'Ecommerce-Accessories'}>
    <div className='container' style={{marginTop:"150px"}}>
<div className='row my-4'>
 {
  accessory.map((x)=>{
     return(
         <div className='col-lg-3 my-5'>
<div className="card rounded" style={{width: '15rem'}}>
<Link to={`/accessory/${x._id}`}><img src={x.image} style={{height:"10rem"}} className="card-img-top" alt="..." /></Link>
<div className="card-body">
<p className='card-desc'>{x.description.slice(0,15)}....</p>
 
 <p4 className='card-rankings text-muted'><span className="fa fa-star checked rr" />{x.ranking}</p4>
<br/>
<button className="button-1 my-auto text-center rounded-2 "> Free Delivery</button>



<p5 className='tt' >RS. {x.price} </p5>

<p3><del className='text-muted yy'>RS. {x.oldp}</del></p3>



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
export default Accessory