import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentService from './AppointmentService';
import BookingModal from './BookingModal';

const AvailableAppointments = ({date}) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <h4 className='text-2xl text-center text-secondary my-16'>Available Appointments on {date && format(date,"PP")}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20'>
                {
                    services.map(service => <AppointmentService
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    ></AppointmentService>)
                }
            </div>
            {
                treatment && <BookingModal 
                treatment={treatment}
                date={date}
                setTreatment={setTreatment}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;