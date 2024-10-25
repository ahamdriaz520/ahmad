import { Link, useParams } from 'react-router-dom'
import { homeproducts } from '../Allapi/homeproducts'
import { useDispatch } from 'react-redux'
import { FaTruck } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";
import { FaHeadphones } from "react-icons/fa";
import { FaTruckMoving } from "react-icons/fa";
import { add } from '../redux/cartSlice';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import CookieConsent from "react-cookie-consent";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../style.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Footer from '../component/Footer';
import Slider from './Slider';
import Layout from '../component/Layout';
import Star from './Star';
import Swal from "sweetalert2";
const Home = () => {
const {_id} = useParams();
const addCarts = (x)=>{
  Swal.fire({
    title: "Something went wrong please try again later!!..",
    width: 600,
    padding: "3em",
    color: "#716add",
    background: "#fff "
  });
}
  return (
    <Layout>
      <Slider/>
       {/* <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://avatars.mds.yandex.net/i?id=08940fee9bf82913e35bdb118e7779cadd7baea7-9690504-images-thumbs&n=13" className="d-block w-100" style={{height:'40rem'}} alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://avatars.mds.yandex.net/i?id=a112c88a35e6f1f1913e099f2d8152efa487a956-12159448-images-thumbs&n=13" className="d-block w-100"  style={{height:'40rem'}} alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/339891190/original/d9781d7f5368ce5961483b26da58fa0cd5f5e5fb/design-your-ecommerce-product-banner-social-media-post-carousel-ad-image.png" className="d-block w-100"  style={{height:'40rem'}} alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://avatars.mds.yandex.net/i?id=46b8e43a39b967d4f016069347b1d513-5889107-images-thumbs&n=13" className="d-block w-100"  style={{height:'40rem'}} alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://avatars.mds.yandex.net/i?id=90d76d6e5baf1f3c38ca49802d9572600a17323a-5232745-images-thumbs&n=13" className="d-block w-100"  style={{height:'40rem'}} alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://avatars.mds.yandex.net/i?id=ead7933f57827dba16b14b5870c8e79d6202fb7e-9264723-images-thumbs&n=13" className="d-block w-100"  style={{height:'40rem'}} alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-autoplay" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-autoplay" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div> */}
<br/><br/>
<div className='container'>
{/* <h2 className='text-center mb-5  display-5 ' style={{color:"#f85606"}}>We Have Three Types Of Products...</h2> */}
  <div className='row'>
      <div className='col-lg-4'>
     
    <Link to='/iphone'>  <img src='https://avatars.mds.yandex.net/i?id=a3436a4b787bc8de87a9de90b0a30f81dd7ae793-10878270-images-thumbs&n=13' className='img rounded-5 card' alt=''/></Link>
      
      <h4 className='text-center mt-3'>iphone Accessories</h4> 
      </div>
    <div className='col-lg-4'>
     <Link to='/accessory'> <img src='https://avatars.mds.yandex.net/i?id=57934ff8bc4b66cc0cedc73d7b89c51395afbd72-10521504-images-thumbs&n=13' className='img rounded-5 card' alt=''/></Link>
      <h4 className='text-center mt-3'>Electronics</h4>
      </div> 
      <div className='col-lg-4'>
      <Link to="/cloths"><img src='https://avatars.mds.yandex.net/i?id=a0b0a870dd976e84e60212f4f2e6c4b089348278-5233259-images-thumbs&n=13' className='img rounded-5 card' alt=''/></Link>
      <h4 className='text-center mt-3'>Clothes</h4>
      </div>
      {/* <div className='col-lg-4'>
      <img src='https://avatars.mds.yandex.net/i?id=a0b0a870dd976e84e60212f4f2e6c4b089348278-5233259-images-thumbs&n=13' className='img1' alt=''/>
      <h4 className='text-center mt-3'>Clothes</h4>
      </div> */}
</div>
<br/>
</div>
{/* <div className='container'>
 <div className='row about'>
    <div className='col-lg-3'>
      <div className='box'>
      <div className='detail'>
      <div className='icon fs-5'>
<FaTruck/>
      </div>
        <h6 className='fw-bold'>Free Shipping</h6>
        <p >Order above $1000</p>
      </div>
      </div>
    </div>
    <div className='col-lg-3'>
    <div className='box'>
      <div className='detail'>
      <div className='icon fs-5'>
        <BsCurrencyDollar/>
        </div>
          <h6 className='fw-bold'>Return and Refund</h6>
        <p>Money Back Gaurenty</p>
      </div>
</div>
    </div>
    <div className='col-lg-3'>
    <div className='box'>
      <div className='detail'>
      <div className='icon fs-5'>
        < CiPercent/>
        </div>
          <h6 className='fw-bold'>Member Discount</h6>
        <p >On every Order</p>
      </div>
</div>
    </div>
    <div className='col-lg-3'>
    <div className='box'>   
      <div className='detail'>
      <FaHeadphones/>  
          <h6 className='fw-bold'>Customer Support</h6>
        <p >Every Time Call Support</p>
      </div>
</div>
    </div>
  </div></div> */}
  <h2 className='text-center mb-5 fw-bold  display-5' style={{color:"#f85606"}}><u>TOP RATED PRODUCTS</u></h2>
   <div className='container'>
        <div className='row my-4'>
            {
             homeproducts.map((x)=>{
                return(
                    <div className='col-lg-3 col-md-4 col-sm-6 my-5'>
    <div className="card" style={{width: '15rem'}}>
 <Link to={`/product/${x._id}`}><img src={x.image} style={{height:"10rem"}}  className="card-img-top " alt="..." /></Link>
  <div className="card-body">
  <p className='card-desc'>{x.description.slice(0,15)}....</p>
 
  <p4 className='card-rankings text-muted'><span className="fa fa-star checked rr" />{x.ranking}</p4>
  {/* <Star stars={x.stars} reviews={x.ranking}/> */}
<br/>
<button className="button-1 my-auto text-center rounded-2 "> Free Delivery</button>
 <p5 className='tt' >RS. {x.price} </p5>
 
 <p3><del className='text-muted yy'>RS. {x.oldprice}</del></p3>
 
   {/* <ul className="list-inline">
                        <li className="list-inline-item text-warning"><i className="fa fa-star" /></li>
                        <li className="list-inline-item text-warning"><i className="fa fa-star" /></li>
                        <li className="list-inline-item text-warning"><i className="fa fa-star" /></li>
                        <li className="list-inline-item text-warning"><i className="fa fa-star" /></li>
                        <li className="list-inline-item text-warning"><i className="fa fa-star" /></li>
                      </ul> */}                                        
   {/* <button className='btn btn-warning rounded' onClick={()=>addCart(x)}>Add_Cart</button> */}
  </div>
</div>
</div>
                )
             })
            }
        </div>
        
    </div>
    {/* <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://avatars.mds.yandex.net/i?id=7c28eb7779d77afbd63fd4aee5cd63f4-3572439-images-thumbs&n=13" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://avatars.mds.yandex.net/i?id=1221b7d44091d70836cbb0fc8789fce3ca960daf-10310841-images-thumbs&n=13" />
        </SwiperSlide> 
        <SwiperSlide>
          <img src="https://avatars.mds.yandex.net/i?id=e68dee16aa51ef89dcd201044f5c0e2745f73cb1-5885439-images-thumbs&n=13" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://avatars.mds.yandex.net/i?id=ee3ed476aa50f82d67a5c64f75f1dfec0f37d9b1-6263806-images-thumbs&n=13" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://avatars.mds.yandex.net/i?id=a4e9ba35bd5e8ab5fa84071bffd9f5cd-3920892-images-thumbs&n=13" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://avatars.mds.yandex.net/i?id=bc66a732079f168485cf9d3a2c93f062cb89fcc6-7777855-images-thumbs&n=13" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://avatars.mds.yandex.net/i?id=7abaef5d07a15599b8c402b7f6d814c959582320-10636447-images-thumbs&n=13" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://avatars.mds.yandex.net/i?id=1614efc4d4a00dc880a64b38dc4e40eb65b7207f-8448647-images-thumbs&n=13" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://avatars.mds.yandex.net/i?id=00a34d9195fd2d6deb0eea6a4102d4c6-5238782-images-thumbs&n=13" />
        </SwiperSlide>
      </Swiper> */}
    {/* //about carsoul indicators// */}
    <div className="container-xl">
  <div className="row">
    <div className="col-md-12">
      <h2 className='text-center mb-5 fw-bold  display-5' style={{color:"#f85606"}}><u>Featured Products</u></h2>
      <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval={0}>
        {/* Carousel indicators */}
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to={0} className="active" />
          <li data-target="#myCarousel" data-slide-to={1} />
          <li data-target="#myCarousel" data-slide-to={2} />
        </ol>   
        {/* Wrapper for carousel items */}
        <div className="carousel-inner">
        <div className="item carousel-item active">
            <div className="row">
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                  <div className="img-box">
                    <img src="https://avatars.mds.yandex.net/i?id=1252c1fa7013e05781239cfb12a19f38c9a8df4b-4428810-images-thumbs&n=13" className="img-fluid" alt />									
                  </div>
                  <div className="thumb-content">
                    <h4>Apple iPad</h4>									
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                      </ul>
                    </div>
                    <p className="item-price"><strike>$400.00</strike> <b>$369.00</b></p>
                    <a href="#" className="btn btn-primary " onClick={addCarts}>Add to Cart</a>
                  </div>						
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                  <div className="img-box">
                    <img src="https://avatars.mds.yandex.net/i?id=54d0ba7d5dededfc68cb4d71f0540bb69591c000-5362604-images-thumbs&n=13" className="img-fluid" alt="Headphone" />
                  </div>
                  <div className="thumb-content">
                    <h4>Sony Headphone</h4>									
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                      </ul>
                    </div>
                    <p className="item-price"><strike>$25.00</strike> <b>$23.99</b></p>
                    <a href="#" className="btn btn-primary"  onClick={addCarts} >Add to Cart</a>
                  </div>						
                </div>
               </div>		
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                  <div className="img-box">
                    <img src="https://avatars.mds.yandex.net/i?id=3f3abc5dc919f59f6994848b214f7f6fa5f60480-9065850-images-thumbs&n=13" className="img-fluid" alt="Macbook" />
                  </div>
                  <div className="thumb-content">
                    <h4>Macbook Air</h4>									
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-half-o" /></li>
                      </ul>
                    </div>
                    <p className="item-price"><strike>$899.00</strike> <b>$649.00</b></p>
                    <a href="#" className="btn btn-primary"  onClick={addCarts} >Add to Cart</a>
                  </div>						
                </div>
              </div>								
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                  <div className="img-box">
                    <img src="https://avatars.mds.yandex.net/i?id=556832a3fce7f7dbac661a52e8c3e34365bef3b0-10142557-images-thumbs&n=13" className="img-fluid" alt="Nikon" />
                  </div>
                  <div className="thumb-content">
                    <h4>Nikon DSLR</h4>									
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                      </ul>
                    </div>
                    <p className="item-price"><strike>$315.00</strike> <b>$250.00</b></p>
                    <a href="#" className="btn btn-primary"  onClick={addCarts} >Add to Cart</a>
                  </div>						
                </div>
              </div>
            </div>
          </div>
          <div className="item carousel-item">
            <div className="row">
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                  <div className="img-box">
                    <img src="https://avatars.mds.yandex.net/i?id=a4f477a9ce168ef750de50438e3c4e1801ad411c-4298456-images-thumbs&n=13" className="img-fluid" alt="Play Station" />
                  </div>
                  <div className="thumb-content">
                  <h4>Sony Play Station</h4>
                    <p className="item-price"><strike>$289.00</strike> <span>$269.00</span></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary"  onClick={addCarts} >Add to Cart</a>
                  </div>						
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                  <div className="img-box">
                    <img src="https://avatars.mds.yandex.net/i?id=41cfc1712ff71c5ad7acf17ea125e40daeb0612c-8529854-images-thumbs&n=13" className="img-fluid" alt="Macbook" />
                  </div>
                  <div className="thumb-content">
                    <h4>Macbook Pro</h4>
                    <p className="item-price"><strike>$1099.00</strike> <span>$869.00</span></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-half-o" /></li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary"  onClick={addCarts} >Add to Cart</a>
                  </div>						
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                  <div className="img-box">
                    <img src="https://avatars.mds.yandex.net/i?id=32de91c3590f6d7e72f2c0eba6b29e2f-5141542-images-thumbs&n=13" className="img-fluid" alt="Speaker" />
                  </div>
                  <div className="thumb-content">
                    <h4>Bose Speaker</h4>
                    <p className="item-price"><strike>$109.00</strike> <span>$99.00</span></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary"  onClick={addCarts} >Add to Cart</a>
                  </div>						
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                  <div className="img-box">
                    <img src="https://avatars.mds.yandex.net/i?id=9442d977e47e204b3ad9e8b50cace9cd-5344952-images-thumbs&n=13" className="img-fluid" alt="Galaxy" />
                  </div>
                  <div className="thumb-content">
                    <h4>Samsung Galaxy S8</h4>
                    <p className="item-price"><strike>$599.00</strike> <span>$569.00</span></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary"  onClick={addCarts} >Add to Cart</a>
                  </div>						
                </div>
              </div>						
            </div>
          </div>
          <div className="item carousel-item">
            <div className="row">
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                  <div className="img-box">
                    <img src="https://avatars.mds.yandex.net/i?id=1cb4ff4c5e96f589f1632d318fa1128156450e90-9181179-images-thumbs&n=13" className="img-fluid" alt="iPhone" />
                  </div>
                  <div className="thumb-content">
                    <h4>Apple iPhone</h4>
                    <p className="item-price"><strike>$369.00</strike> <span>$349.00</span></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary"  onClick={addCarts} >Add to Cart</a>
                  </div>						
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                  <div className="img-box">
                    <img src="https://avatars.mds.yandex.net/i?id=8fb5a2afa1eaac078bdb2b155140a0af04ac04dd-6372940-images-thumbs&n=13" className="img-fluid" alt="Canon" />
                  </div>
                  <div className="thumb-content">
                    <h4>Canon DSLR</h4>
                    <p className="item-price"><strike>$315.00</strike> <span>$250.00</span></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary"  onClick={addCarts} >Add to Cart</a>
                  </div>						
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                  <div className="img-box">
                    <img src="https://avatars.mds.yandex.net/i?id=21a84af8e72ac65d2da72feef8980ad1b2b6624a-9233745-images-thumbs&n=13" className="img-fluid" alt="Pixel" />
                  </div>
                  <div className="thumb-content">
                    <h4>Google Pixel</h4>
                    <p className="item-price"><strike>$450.00</strike> <span>$418.00</span></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-half-o" /></li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary"  onClick={addCarts} >Add to Cart</a>
                  </div>						
                </div>
              </div>	
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                  <div className="img-box">
                    <img src="https://avatars.mds.yandex.net/i?id=f58216f35e80b2f3dafa9ec2c9c7007def570281-12615441-images-thumbs&n=13" className="img-fluid" alt="Watch" />
                  </div>
                  <div className="thumb-content">
                    <h4>Apple Watch</h4>
                    <p className="item-price"><strike>$350.00</strike> <span>$330.00</span></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary"  onClick={addCarts} >Add to Cart</a>
                  </div>						
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Carousel controls */}
        <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
          <i className="fa fa-angle-left" />
        </a>
        <a className="carousel-control-next" href="#myCarousel" data-slide="next">
          <i className="fa fa-angle-right" /> 
        </a>
      </div>
    </div>
  </div>
  <CookieConsent
  location="bottom"
  buttonText="Accept All Cookies"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={150}
>
This website uses cookies to enhance the user experience.
This website uses cookies to enhance the user experience.
This website uses cookies to enhance the user experience.
This website uses cookies <Link to='/cookies-policy'>Cookie Policy</Link> to enhance the user experience.
This website uses cookies to enhance the user experience.
  This website uses cookies to enhance the user experience.{" "}
  <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
</CookieConsent>
</div>
    </Layout>
  )
}
export default Home