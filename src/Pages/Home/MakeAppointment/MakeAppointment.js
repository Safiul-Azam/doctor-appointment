import React from 'react';
import doctor from '../../../images/images/doctor-small.png'
import appointment from '../../../images/images/appointment.png'

const Appointment = () => {
    return (
        <div className='mt-44 mb-20'>
            <div style={{ background: `url(${appointment})` }} className="flex justify-center items-center lg:flex-row">
                <div className='flex-1 hidden lg:block'>
                    <img src={doctor} className=" mt-[-100px]" alt='treatment' />
                </div>
                <div className='flex-1 p-8'>
                    <h5 className='lg:text-xl font-bold text-secondary my-4'>Appointment </h5>
                    <h2 className="text-2xl lg:text-3xl font-bold text-white">Make an appointment Today</h2>
                    <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn border-0 text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Appointment;