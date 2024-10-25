import React, { useEffect, useState } from "react";
import "../ShoppingCard.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { add, remove, removesingleitem } from "./cartSlice";
import { loadStripe } from "@stripe/stripe-js";
import Layout from "../component/Layout";
import Swal from "sweetalert2";
import Checkout from "./Checkout";
import { IoMdAdd } from "react-icons/io";
import { IoRemoveSharp } from "react-icons/io5";
import Header from "../component/Header";
const ShoppingCard = () => {
  const navigate = useNavigate();
  const [price, setPrice] = useState();
  const [qty, setQty] = useState();
  const [fee, setFee] = useState();
  const dispatch = useDispatch();
  const Delete = (_id) => {
  const del = 
    dispatch(remove(_id));
  };
  const increment = (data) => {
    dispatch(add(data));
  };
  const decrement = (data) => {
    dispatch(removesingleitem(data));
  };
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
  <Layout title={'Cart'}>
  <Header/>
      <div className="container bootdey" style={{ marginTop: "120px" }}>
      <div className="row bootstrap snippets ">
        <div className="clearfix visible-sm" />
        {/* Cart */}
        <div className="col-lg-9 col-md-9 col-sm-12 m-auto">
          <div className="col-lg-12 col-sm-12 bg-dark text-white p-2 mt-5">
            <span className="title ">SHOPPING CART</span>
          </div>
          <div className="col-lg-12 col-sm-12 hero-feature ">
            <div className="table-responsive ">
              <table className="table table-bordered tbl-cart ">
                <thead className="text-center">
                  <tr className="text-center items-center table-striped table-hover">
                    <td className="hidden-xs">Image</td>
                    <td>Product Name</td>
                    <td>-</td>

                    <td className="td-qty">Quantity</td>
                    <td>+</td>
                    <td>Unit Price</td>
                    <td>Sub Total</td>
                    <td>Remove</td>
                  </tr>
                </thead>
                <tbody>
                 {getdata.map((data) => {
                    return (
                      <tr className="text-center items-center table-striped table-hover">
                        <td className="hidden-xs">
                         
                            <img
                              src={data.image}
                              alt="Age Of Wisdom Tan Graphic Tee"
                              name
                              width={70}
                              height={60}
                            />
                          
                        </td>
                        <td>
                          
                            {data.name}
                          
                        </td>
                        <td>
                          
                           
                           <p className="tom1"> < IoRemoveSharp onClick={() => decrement(data)} className="fs-5 mt-3 fw-bold tom" style={{color:'#e55039'}}/></p>
                            
                         
                        </td>
                        <td>{data.qty}</td>
                        <td>
                        
                           
                            <p className="tom1"> <IoMdAdd  onClick={() => increment(data)} className="fs-5 mt-3 fw-bold tom" style={{color:'#e55039'}} /></p>
                            
                         
                        </td>
                        <td className="price"> {data.price}</td>
                        <td> {data.qty * data.price}</td>
                        <td className="text-center">
                          <a 
                            onClick={() => Delete(data._id)}
                            href="#"
                            className="remove_cart"
                            rel={2}
                          >
                            <i className="fa fa-trash-o" />
                          </a>
                        </td>
                      </tr>
                    );
                  })}
<hr />

                  {/* <tr className="text-center items-center table-striped table-hover">
                    <td colSpan={6} align="right">
                      Total_Price: {price}
                    </td>
                    <td colSpan={6} align="right">
                      Total_Qty: {qty}
                    </td>
                  </tr> */}
                </tbody>
                {/* <tfoot>
              <tr className='justify-content-between'>
                    <div className='d-flex justify-content-between'><th>
                <p>Price_total</p></th>
                <th>
                <p>Qty_total</p></th></div>
                
                </tr>
                
            </tfoot> */}
              </table>
            </div>
            <div className="btn-group btns-cart ">
              {/* <Link to="/">
                <button type="button" className="btn pp">
                  <i className="fa fa-arrow-circle-left" /> Continue Shopping
                </button>
              </Link> */}
              {/* <button type="button" className="btn pp">
                Update Cart
              </button> */}
              {/* <Link to="#">
                <button type="button" className="btn pp" onClick={makepayment}><Checkout  price={price} />
                <i className="fa fa-arrow-circle-right" />
                  
                </button>
              </Link> */}
              {/* <div className="">
                <p className="mx-5">Total_Price:{price}</p>
              </div>
              <div className="">
                <p className="mx-5">Total_Qty:{qty}</p>
              </div> */}
            </div>
          </div>
        </div>
        {/* End Cart */}
        <div className="cart-bottom">
  <div className="cart-total">
    <h3 className="fw-bold">Cart Totals </h3>
    <div className="place-order-right">
    <div className='WWW'>
    <div className="cart-total-detail">
        <p> Qty </p>
        <p>{qty}</p>
      </div>
      </div>
      <div className='WWW'>
      <div className="cart-total-detail">
        <p>Subtotal </p>
        <p>{price}</p>
      </div>
      </div>
      <div className='WWW'>
      <div className="cart-total-detail">
        <p>Delivery Fee</p>
        <p>{fee}</p>
      </div>
     </div>
     <div className='WWW'>
      <div className="cart-total-detail"> 
      <b>Total</b>
      <b>{price + fee}</b>
      </div>
      </div>
    </div>
    <div className="carts">
    <div className="proceed">
      
      <button onClick={()=>navigate('/')} style={{backgroundColor:'#e55029'}}> CONTINUE SHOPPING</button>
      </div>
    <div className="proceed">
      
    <button onClick={()=>navigate('/order')} style={{backgroundColor:'black'}}> PROCEED TO CHECKOUT</button>
    </div>
    </div>
  </div>
  <div className="cart-promo-code">
    <div>
      <p>If you have a promo code, Enter it here.</p>
      <div className="cart-promocode-input">
        <input type="text" placeholder="promo code"></input>
        <button>Submit</button>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
    
  </Layout>
  );
};

export default ShoppingCard;
