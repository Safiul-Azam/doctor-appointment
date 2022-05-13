import React from 'react';

const Review = ({ people }) => {
    return (
        <div>
            <div class="card bg-base-100 shadow-xl p-5">
                <div class="card-body">
                    <p>{people.review}</p>
                </div>
                <div className='flex ml-8 items-center'>
                    <div class="avatar">
                        <div class="w-18 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={people.img} alt='' />
                        </div>
                    </div>
                    <div className='ml-4'>
                        <h4 className='font-bold text-sm'>{people.name}</h4>
                        <h5 className='text-sm'>{people.address}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;