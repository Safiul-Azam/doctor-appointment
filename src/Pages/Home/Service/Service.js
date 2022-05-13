import React from 'react';

const Service = ({service}) => {
    const {name, img, description} = service
    return (
        <div>
            <div className="card card-compact lg:w-96 bg-base-100 shadow-xl text-center">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className='text-sm font-semibold'>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;