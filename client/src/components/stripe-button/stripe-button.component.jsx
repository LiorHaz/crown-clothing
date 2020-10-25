import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    //Stripe charges the price in cent
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HdEhjHWXqsqAcA1WWgBGgGxTz1JKuTQwt4Yt7xBZAFo5VUbry7keaYrfUF6vILTyHKJoTgohHRBgnleugyl8hnL00itaZjhUM';

    const onToken = token => {
       axios({ 
           url: 'payment',
           method: 'post',
           data: {
               amount: priceForStripe,
               token
           }
        }).then(res => {
            alert('Payment successful!');
        }).catch(error => {
            console.log('Payment error: '+ JSON.parse(error));
            alert('There was an issue with your payment. Please sure you use the provided credit card.');
        })
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