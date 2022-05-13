import React from 'react';
import appointment from '../../../images/images/appointment.png'

const Contact = () => {
    return (
        <div style={{background:`url(${appointment})`}} className='p-16 my-24'>
            <h4 className='text-center text-xl font-bold mb-3 text-secondary '>contact us</h4>
            <h3 className='text-center text-4xl mb-10 text-white'>Stay connected with us</h3>
            <div className='w-6/12 mx-auto'>
                <input className='w-full border block mb-2 p-2 rounded' type="email" name="email" placeholder='Email address' id=""/>
                <input className='w-full border block mb-2 p-2 rounded' type="text" name="subject" placeholder='Subject' id=""/>
                <textarea className='w-full border block mb-2 p-2 rounded' name="message" placeholder='Your message' cols="10" rows="6"></textarea>
                <div className='text-center mt-10'>
                <input className='bg-gradient-to-r from-secondary to-primary btn border-0 rounded' type="button" value="Submit" />
                </div>
            </div>
        </div>
    );
};

export default Contact;