import React from 'react'
import StripeCheckout from "react-stripe-checkout";
import logo from '../../assets/logo.png'

const StripeCheckoutButton = ({ price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Qp1spKSymnAhWRDZcc3CKsgupi6uf7JQEn7ZTto2aFk8FjBVWFMgnIeqJskJCj7tMxIJUivnjaJH5ZyipVAfRJn00VsGwUPVM';

  const  handleToken = token => {
        console.log(token)
        alert("payment Successfull")
    }
  return (
    <div>
       <StripeCheckout
        stripeKey={publishableKey}
        label='Pay Now'
        panelLabel='Pay Now'
        token={handleToken}
        amount={priceForStripe}
        name={'Eco Bazaar Ltd'}
        billingAddress
        shippingAddress
        image={logo}
        description={`Your total is $${price}`}
    
      />
    </div>
  )
}

export default StripeCheckoutButton
