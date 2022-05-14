import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppointments = ({date}) => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <h4 className='text-2xl text-center text-secondary font-semiBold mb-20'>Available Appointments on:{ format(date,"PP")}</h4>
            <div>
            </div>
        </div>
    );
};

export default AvailableAppointments;