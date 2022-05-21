import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L1lwNK8cblwyB4icoDXqCV5LRsqz0BUpH0hPggBa0b10LucJ4r91UIcNBp0DBWqe94yOFFslBJmqMDKdZNesRZ400Ewz7t6jX');

const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/booking/${id}`
    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Pay For {appointment?.treatment}</h1>
                    <p class="py-6">We will see you on <span className='text-orange-500'>{appointment.date}</span> at {appointment.slot}</p>
                    <p className='text-orange-500'>Appointment Price ${appointment.price}</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;