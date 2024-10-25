import React from 'react'
import { useParams } from 'react-router-dom'
import { jeans } from '../Men/jeans'
import Header from '../component/Header'

const Jeansdetail = () => {
    const {_id} = useParams()
    const data = jeans.find((x)=>x._id == _id)
  return (
    <div>
       <Header/>
        <br/><br/>
<div className="container" style={{marginTop:"100px"}}>

    <div className="container-fliud">
      <div className="wrapper row">
        <div className="preview col-md-6">
          <div className="preview-pic tab-content">
            <div className="tab-pane active" id={data.imageUrl}><img src={data.imageUrl} style={{height:"50rem"}} /></div>
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
          <h3 className="product-title">{data.brand}</h3>
          <div className="rating">
            <div className="stars">
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </div>
            <span className="review-no text-primary">45 reviews</span>
          </div>
          <p className='title fw-bold'>{data.title}</p>
          <p className="product-description">{data.description}</p>
          <h4 className="price">current price: <span>{data.price}</span></h4>
          <h5>old price: <del className='oldprice'><span>{data.oldprice}</span></del></h5>
          <p className="vote text--danger"><strong>93%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
          <h5 className="sizes">sizes:
            <span className="size" data-toggle="tooltip" title="small">s</span>
            <span className="size" data-toggle="tooltip" title="medium">m</span>
            <span className="size" data-toggle="tooltip" title="large">l</span>
            <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
          </h5>
          <h5 className="colors">colors:
            <span className="color orange" data-toggle="tooltip" title="Not In store" />
            <span className="color green" />
            <span className="color blue" />
          </h5>
          <div className="action">
            <button className="add-to-cart btn btn-default" type="button">add to cart</button>
            <button className="like btn btn-default" type="button"><span className="fa fa-heart" /></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Jeansdetail