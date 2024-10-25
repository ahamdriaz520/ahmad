import React from 'react'
import { lehnga2 } from '../Women/lengha2'
import { useParams } from 'react-router-dom'
import Header from '../component/Header'
import { add } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import Layout from '../component/Layout'
const Lehnga2detail = () => {
  const {_id} = useParams()
    const data = lehnga2.find((x)=>x._id == _id)
    const dispatch = useDispatch();
    const addCart = (data)=>{
      Swal.fire({
        title: " Product Added to Cart Successfully",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff "
      });
    
      dispatch(add(data))
    }
   const like = ()=>{
    Swal.fire({
      title: "Product Added to wishlist Successfully",
      width: 600,
      padding: "3em",
      color: "#f85606",
      background: "#fff"
    });
   }
  return (
 <Layout title={'Women-Lahnga detail'}>
  
<br/><br/>
	<div className="container"  style={{marginTop:"100px"}}>
 
    <div className="container-fliud">
      <div className="wrapper row">
        <div className="preview col-md-6">
          <div className="preview-pic tab-content">
            <div className="tab-pane active" id={data.image}><img style={{height:'25rem'}}  src={data.image}  style={{height:"30rem"}} /></div>
            {/* <div className="tab-pane" id="pic-2"><img src="http://placekitten.com/400/252" /></div>
            <div className="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252" /></div>
            <div className="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252" /></div>
            <div className="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" /></div> */}
          </div>
          {/* <ul className="preview-thumbnail nav nav-tabs">
            <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
            <li><a data-target="#pic-2" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
            <li><a data-target="#pic-3" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
            <li><a data-target="#pic-4" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
            <li><a data-target="#pic-5" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
          </ul> */}
        </div>
        <div className="details col-md-6">
        <p className="product-title fs-5">{data.name}</p>
          <p className="product-description">{data.brand}</p>
          <div className="rating">
            <div className="stars">
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </div>
            <span className="review-no text-primary">{data.reviews} reviews</span>
          </div>
          <p className="product-description">{data.title}</p>
          <h4 className="price">current price: <span>{data.price}</span></h4>
          <h5>old price: <del className='oldprice'><span>{data.oldprice}</span></del></h5>
          <p className="vote text-danger"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
          <h5 className="sizes">sizes:
            <span className="size" data-toggle="tooltip" title="small">s</span>
            <span className="size" data-toggle="tooltip" title="medium">m</span>
            <span className="size" data-toggle="tooltip" title="large">l</span>
            <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
          </h5>
          <h5 className="colors">colors:
            <span className="color orange not-available" data-toggle="tooltip" title="Not In store" />
            <span className="color green" />
            <span className="color blue" />
          </h5>
          <div className="action">
            <button className="add-to-cart btn btn-default" type="button"   onClick={()=>addCart(data)}>add to cart</button>
            <button className="like btn btn-default ms-3" style={{backgroundColor:"#f85606"}} type="button" onClick={like}><span className="fa fa-heart" /></button>
          </div>
        </div>
      </div>
    </div>
  </div>


       {/* <div className='container'>
        <div className='row'>
            <div className='col-lg-6 mt-3'>
                <img src={data.image} alt='' className='img-thumnail' style={{height:'30rem' , width:'30rem'}}/>
            </div>
            
            <div className='col-lg-6 mt-5'>
                <h1 className='fw-bold'>{data.brand}</h1>
                {/* <h2>{data.title}</h2> */}
                <br/>
                {/* <h5>Color: {data.color}</h5> */}
                <br/>
                {/* <p className='fw-bold'>Discounted Price:  {data.discountedPrice}</p> */}
                {/* <h3>Price: {data.price}</h3>
                <br/> */}
                {/* <h4>DiscountPersent:  {data.discountPersent}</h4> */}
               
            {/* </div>
        </div> */}
    {/* // </div> */} 
 </Layout>
  )
}


export default Lehnga2detail