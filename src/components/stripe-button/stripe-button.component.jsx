import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    //Stripe charges the price in cent
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HdEhjHWXqsqAcA1WWgBGgGxTz1JKuTQwt4Yt7xBZAFo5VUbry7keaYrfUF6vILTyHKJoTgohHRBgnleugyl8hnL00itaZjhUM';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Crown Clothing Ltd.'
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