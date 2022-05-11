import React from 'react';
import InfoCard from './InfoCard';
import clock  from '../../../images/icons/clock.svg'
import marker  from '../../../images/icons/marker.svg'
import phone  from '../../../images/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-5'>
            <InfoCard description='Lorem Ipsum is simply dummy text ' title='Opening Hours' bgColor='bg-gradient-to-r from-secondary to-primary' img={clock}></InfoCard>
            <InfoCard description='Brooklyn, NY 10036, United States' title='Visit our location' bgColor='bg-accent' img={marker}></InfoCard>
            <InfoCard description='+89893200774' title='Contact us' bgColor='bg-gradient-to-r from-secondary to-primary'img={phone}></InfoCard>
        </div>
    );
};

export default Info;