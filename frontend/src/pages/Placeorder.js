import React, { useEffect, useState } from 'react'
import Layout from '../component/Layout'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import Checkout from '../redux/Checkout';
const Placeorder = () => {
 
    const [price, setPrice] = useState();
    const [qty, setQty] = useState();
    const [fee, setFee] = useState();
    const getdata = useSelector((state) => state.cartReducer.carts);
    const totalp = () => {
        let tprice = 0;
        getdata.map((x) => {
          tprice += x.qty * x.price;
        });
        setPrice(tprice);
      };
      const totalfee = () => {
        let tfee = 0;
        getdata.map((x) => {
          tfee += x.fee;
        });
        setFee(tfee);
      };
      const calqty = () => {
        let qtycount = 0;
        getdata.map((x) => {
          qtycount += x.qty;
        });
        setQty(qtycount);
      };
      useEffect(() => {
        totalp();
        calqty();
        totalfee();
      });
      const makepayment = () => {
        const stripe = loadStripe(
          "pk_test_51Oo4LjHsVtjP0aA9xE9ktveP7Ixn5ffBm3hVmGmoQtaxE0UsLNnmW01Hsrx8Fry30RRQ7fDY8NzY5XHuSemAChoa00yjTzmLJr"
          );
          const body = {
            products : getdata
          }
          const headers = {
            "content-type": "application/json",
          }
          const response = fetch('http://localhost:2000/user',{
            method:"post",
            headers,
            body:JSON.stringify(body)
          })
          // response.json();
          // const result = response.json()
          
      };
  return (
  <Layout title={'Order details'}>
    <form className='place-order'>
        <div className='place-order-left'>
            <p className='title'>
                Delivery Information
            </p>
           
            <div className='multi-fields'>
                <input type='text' placeholder='First name'></input>
                <input type='text' placeholder='Last name'></input>
            
            </div>
            <input type='email' placeholder='Email address'></input>
            <input type='text' placeholder='Street'></input>
            <div className='multi-fields'>
                <input type='text' placeholder='City'></input>
                <input type='text' placeholder='State'></input>
            </div>
            <div className='multi-fields'>
                <input type='text' placeholder='Zip code'></input>
                <input type='text' placeholder='Country'></input>
            </div>
            <input type='text' placeholder='Phone'></input>
            <center><button type="submit" className="btn btn-warning ms-2 px-4">Later</button></center>
        </div>
        <div className='place-order-right'>
        <div className="cart-total">
    <h3 className='fw-bold'>Cart Totals </h3>
    <div>
    <div className="cart-total-detail">
        <p> Qty </p>
        <p>{qty}</p>
      </div>
      <hr/>
      <div className="cart-total-detail">
        <p>Subtotal </p>
        <p>{price}</p>
      </div>
      <hr/>
      <div className="cart-total-detail">
        <p>Delivery Fee</p>
        <p>{fee}</p>
      </div>
      <hr/>
      <div className="cart-total-detail"> 
      <b>Total</b>
      <b>{price + fee}</b>
      </div>
      
    </div>
    <div className="proceed">
    <Link to="#">
                <button type="button" style={{backgroundColor:'#e55029'}} onClick={makepayment}><Checkout  price={price} />
                <i className="fa fa-arrow-circle-right" />
                </button>
                </Link>
    </div>
  </div>
        </div>
    </form>
  </Layout>
  )
}

export default Placeorder