import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import chair from '../../images/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <div className="hero min-h-screen md:min-h-screen">
                <div className="hero-content flex lg:flex-row-reverse">
                    <img src={chair} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                         styles={{
                            caption: { color: 'red' }
                          }}
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            />
                            <p className='text-2xl'>selected date: {date && format(date,"PP")}</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;