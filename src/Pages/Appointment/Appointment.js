import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import chair from '../../images/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bgChair from '../../images/images/bg.png'
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <div style={{
                background:`url(${bgChair})`,
                backgroundPosition:'center',
                backgroundSize:'cover'
                }} className="hero mt-32">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='' className="max-w-sm rounded-lg shadow-2xl w-full" />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            />
                    </div>
                </div>
            </div>
            <AvailableAppointments date={date}></AvailableAppointments>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;