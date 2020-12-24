import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import swal from "sweetalert";


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey =
        "pk_test_51I1pGZGItSYZHOzZ68Hfz1PuieZ3XZ96giIrlza7zdMRgCXEGtpyGmT46vEICK7ZwBqScPRlmbkLr3OXlMFDqUII007X9DH9TO";
    
    const onToken = token => {
        console.log(token);
        swal("Good Job",'Payment Successful', "success"); 
    }
    
    return (
      <StripeCheckout
        label="Pay Now"
        name="EgoSki Clothing Ltd"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    );
}

export default StripeCheckoutButton;
