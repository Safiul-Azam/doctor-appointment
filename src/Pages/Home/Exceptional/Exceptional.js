import React from 'react';
import treatment from '../../../images/images/treatment.png'

const Exceptional = () => {
    return (
        <div>
            <div className="hero min-h-screen-bad lg:px-40 mb-32">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="lg:max-w-sm w-100 rounded-lg shadow-2xl" alt='treatment' />
                    <div className='lg:ml-20'>
                        <h2 className="text-4xl text-accent font-bold">Exceptional Dental Care, on Your Terms</h2>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn border-0 text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;