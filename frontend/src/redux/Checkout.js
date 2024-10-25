import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
const Checkout = ({price})=>{
    const handler = (token)=>{
        console.log(token)
    }
    return(
      <StripeCheckout 
      amount={price*100} // cents
      currency="pkr"
      token={handler}
      stripeKey='pk_test_51Ot9XGP5t6OaaLtJYP08qIkdLJfTggaVFKHGLaucrMZv0AxnjMgSP1XrvNWwSjZsuv2VL5xc1QWO5cI4Tv73DGVV00BKCBekkv'
      email="info@vidhub.co"
      shippingAddress
      >
        PayNow 
      </StripeCheckout>
    )
}
export default Checkout;