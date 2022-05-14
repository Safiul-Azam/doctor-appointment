import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Appointment from '../MakeAppointment/MakeAppointment';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Exceptional from '../Exceptional/Exceptional';
import Info from '../Info/Info';
import Information from '../Information/Information';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Information></Information>
            <Services></Services>
            <Exceptional></Exceptional>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;