import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckOutForm = ({appointment}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const {price, patientEmail, patient} = appointment
    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify({price})
            
        })
        .then(res => res.json())
        .then(data => {
            if(data?.clientSecret){
                setClientSecret(data.clientSecret)
            }
        })
    }, [price])

    const handleSubmit = async e => {
        e.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if(error){
            setCardError(error.message)
            console.log(error)
            setSuccess('')
        }else{
            setCardError('')
        }
    
        //confirm cart payment
        const {paymentIntent, intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name:patient,
                  email:patientEmail
                },
              },
            },
          );
          if(intentError){ 
              setCardError(intentError.message)
              console.log(intentError)
          }else{
              setCardError('')
              setSuccess('congrats! Your payment is complete')
              console.log(success)
          }
       
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-secondary btn-sm mt-8' type="submit" disabled={!stripe || !clientSecret || success}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-500'>{cardError}</p>}
            {success && <p className='text-green-500'>{success}</p>}
        </>
    );
};

export default CheckOutForm;