import React from 'react';
import InfoCard from './InfoCard';
import clock  from '../../../images/icons/clock.svg'
import marker  from '../../../images/icons/marker.svg'
import phone  from '../../../images/icons/phone.svg'

const Info = () => {
    const clockInfo ={
        img:clock,
        title:'Opening Hours',
        description:'Lorem Ipsum is simply dummy text of the pri',
        background:'bg-primary'
    }
    const phoneInfo ={
        img:marker,
        title:'Contact us',
        description:'+89893200774'
    }
    const markerInfo ={
        img:phone,
        title:'Visit our location',
        description:'Brooklyn, NY 10036, United States'
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <InfoCard clockInfo={clockInfo}></InfoCard>
            <InfoCard phoneInfo={phoneInfo}></InfoCard>
            <InfoCard markerInfo={markerInfo}></InfoCard>
        </div>
    );
};

export default Info;