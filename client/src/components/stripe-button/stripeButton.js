import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_nl5y9KhzoNv7JIRtfXqGu4AX00TBoDJxxU'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful!')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Kleinder'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken} 
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;