import React from 'react';
import cavity from '../../../images/images/cavity.png'
import whitening from '../../../images/images/whitening.png'
import fluoride from '../../../images/images/fluoride.png'
import Service from '../Service/Service';

const allServices = [
    { _id: 1, name: 'Fluoride Treatment', img: fluoride, description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' },
    { _id: 2, name: 'Cavity Filling', img: cavity, description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' },
    { _id: 3, name: 'Teeth Whitening', img: whitening, description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' },
]
const Services = () => {
    return (
        <div className='my-32'>
            <h5 className='text-center text-sm font-bold text-secondary'>OUR SERVICES</h5>
            <h2 className='text-center mb-16 text-2xl'>Services We Provide</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    allServices.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;