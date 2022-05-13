import React from 'react';
import clock from '../../../images/icons/clock.svg'
import marker from '../../../images/icons/marker.svg'
import phone from '../../../images/icons/phone.svg'

const Information = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mb-12 px-4 lg:px-12'>
            <div className="bg-gradient-to-r from-secondary to-primary card lg:card-side shadow-xl p-3 ">
                <figure><img src={clock} alt=''/></figure>
                <div className="card-body">
                    <h2 className="card-title">Opening Hours</h2>
                    <p>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
            <div className="bg-accent text-white card lg:card-side shadow-xl p-3">
                <figure><img src={marker}alt=''/></figure>
                <div className="card-body">
                    <h2 className="card-title">Visit our location</h2>
                    <p>Brooklyn, NY 10036, United States</p>
                </div>
            </div>
            <div className=" bg-gradient-to-r from-secondary to-primary card lg:card-side shadow-xl p-3">
                <figure><img src={phone} alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Contact us now</h2>
                    <p>+000 123 456789</p>
                </div>
            </div>
        </div>
    );
};

export default Information;