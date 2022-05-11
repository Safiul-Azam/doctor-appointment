import React from 'react';
import treatment from '../../../images/images/treatment.png'

const Exceptional = () => {
    return (
        <div>
            <div class="hero min-h-screen-bad px-40 mb-32">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" alt='treatment' />
                    <div className='ml-20'>
                        <h2 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h2>
                        <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button class="btn border-0 text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;