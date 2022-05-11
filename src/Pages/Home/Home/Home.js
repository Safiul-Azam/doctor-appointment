import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Exceptional from '../Exceptional/Exceptional';
import Info from '../Info/Info';
import Information from '../Information/Information';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Information></Information>
            <Info></Info>
            <Services></Services>
            <Exceptional></Exceptional>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;