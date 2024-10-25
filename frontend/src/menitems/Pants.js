import React from 'react'
import { pants } from '../Men/men_page1'

import { Link, useParams } from 'react-router-dom';
import Layout from '../component/Layout';

const Pants = () => {
  const {_id} = useParams();
  return (
    <Layout title={'Men-Pants'}>
    <div className='container' style={{marginTop:"150px"}}>
<div className='row my-4'>
 {
  pants.map((x)=>{
     return(
         <div className='col-lg-3 col-md-4 col-sm-6 my-5'>
<div className="card rounded" style={{width: '15rem'}}>
<Link to={`/pants/${x._id}`}><img src={x.imageUrl} style={{height:"13rem"}} className="card-img-top rounded" alt="..." /></Link>
<div className="card-body">
<p className=''>{x.description.slice(0,20)}....</p>
{/* <h3 className='card-title'>{x.title}</h3> */}
{/* <p className='card-brand fw-bold'>{x.brand}</p> */}
<p4 className='card-rankings text-muted'><span className="fa fa-star checked fs-8" />{x.ranking}</p4>
<br/>
<button class="button-1 my-1">Free Delivery</button>

 

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

export default Pants