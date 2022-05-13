import React from 'react';
import people1 from '../../../images/images/people1.png'
import people2 from '../../../images/images/people2.png'
import people3 from '../../../images/images/people3.png'
import quote from '../../../images/icons/quote.svg'
import Review from '../Review/Review';

const Testimonial = () => {
    const testimonial = [
        { _id: 1, name: 'Winson Herry', review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', address: 'California', img: people1 },
        { _id: 2, name: 'Winson Herry', review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', address: 'California', img: people2 },
        { _id: 3, name: 'Winson Herry', review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', address: 'California', img: people3 },
    ]
    return (
        <div className='mb-16 px-4 lg:px-12'>
            <div className='flex justify-between items-center'>
                <div className='mb-22 lg:mb-28'>
                    <h5 className='text-sm font-bold text-primary mb-3'>Testimonial</h5>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <div className='mb-16'>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-12'>
                {
                    testimonial.map(people => <Review
                        key={people._id}
                        people={people}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonial;