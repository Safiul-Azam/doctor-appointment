import React from 'react';

const AppointmentService = ({ service, setTreatment }) => {
    const { name, slots } = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body text-center font-semibold">
                <h2 className=" text-xl text-secondary ">{name}</h2>
                <p className='text-sm'>
                    {
                        slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>no appointment available</span>
                    }
                </p>
                <p className='text-sm'>{slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>
                <div className="card-actions justify-center">
                    <button></button>
                    <label
                        htmlhtmlFor="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn modal-button btn-secondary text-white"
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentService;