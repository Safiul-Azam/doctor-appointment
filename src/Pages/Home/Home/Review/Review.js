import React from 'react';

const Review = ({people}) => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl p-5">
                <div class="card-body">
                    <p>{people.review}</p>
                </div>
               <div className='flex ml-8 items-center'>
                   <div>
                       <img src={people.img} alt="" />
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