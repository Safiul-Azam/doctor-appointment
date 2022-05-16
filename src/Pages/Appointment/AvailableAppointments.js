import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import AppointmentService from './AppointmentService';
import BookingModal from './BookingModal';
import Loading from '../Shared/Loading/Loading';

const AvailableAppointments = ({ date }) => {
    const [treatment, setTreatment] = useState(null)
    const formattedDate = format(date, 'PP')

    const { data:services,isLoading, refetch} = useQuery(['available',formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json())
        )
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h4 className='text-2xl text-center text-secondary my-16'>Available Appointments on {date && format(date, "PP")}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20'>
                {
                    services?.map(service => <AppointmentService
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
                    refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;