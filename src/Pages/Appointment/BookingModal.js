import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment,setTreatment, date }) => {
    const {_id, slots, name} = treatment
    const handleBooking = e => {
        e.preventDefault()
        const slot = e.target.slot.value 
        console.log( _id, name, slot )
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-semibold text-2xl text-accent">{name}</h3>
                    <form onSubmit={handleBooking} className='text-accent grid grid-cols-1 gap-3 justify-items-center my-10'>
                        <input name='date' type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full text-lg font-semibold" />
                        <select name='slot' className="select select-bordered w-full">
                           {
                               slots.map(slot => <option key={slot._id}value={slot}>{slot}</option>)
                           }
                        </select>
                        <input name='name' type="text" placeholder="Full Name" className="input input-bordered w-full" />
                        <input name='email' type="email" placeholder="Enter Your Email" className="input input-bordered w-full" />
                        <input name='number' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input type="submit" value='SUBMIT' className="btn btn-secondary w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;