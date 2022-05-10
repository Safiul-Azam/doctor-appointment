import React from 'react';
import cavity from '../../../images/images/cavity.png'
import whitening from '../../../images/images/whitening.png'
import fluoride from '../../../images/images/fluoride.png'
import Service from '../Service/Service';

const allServices = [
    { _id: 1, name: 'cavity', img: cavity, description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' },
    { _id: 2, name: 'cavity', img: whitening, description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' },
    { _id: 3, name: 'cavity', img: fluoride, description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' },
]
const Services = () => {
    return (
        <div>
            <h5>OUR SERVICES</h5>
            <h2>Services We Provide</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
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