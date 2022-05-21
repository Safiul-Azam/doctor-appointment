import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Link } from 'react-router-dom';

const BookingModal = ({ treatment, setTreatment, date, refetch }) => {
    const MySwal = withReactContent(Swal)
    const [user] = useAuthState(auth)
    const { _id, slots, name, price } = treatment
    const formattedDate = format(date, 'PP')
    const handleBooking = e => {
        console.log('clicked')
        e.preventDefault()
        const slot = e.target.slot.value
        const phone = e.target.number.value
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            price:price,
            patient: user.displayName,
            patientEmail: user.email,
            phone,
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.success){
                    MySwal.fire({
                        title: <strong>Appointment is set!</strong>,
                        html: <i>{formattedDate} at {slot}</i>,
                        icon: 'success'
                    })
                }else{
                    MySwal.fire({
                        icon: 'error',
                        title: 'Already have an appointment on',
                        text: `${data.booking.date} at ${data.booking.slot}`,
                        footer: `<a href="/appointment">Please try another date</a>`
                      })

                    }
                    refetch()
                    setTreatment(null)
            })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-semibold text-2xl text-accent">{name}</h3>
                    <form onSubmit={handleBooking} className='text-accent grid grid-cols-1 gap-3 justify-items-center my-10'>
                        <input name='date' type="text" disabled value={date && format(date, 'PP')} className="input input-bordered w-full text-lg font-semibold" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" disabled value={user?.displayName || ''} className="input input-bordered w-full text-lg font-semibold" />
                        <input name='email' type="email" disabled value={user?.email || ''} className="input input-bordered w-full text-lg font-semibold" />
                        <input name='price' type="number" disabled value={ price || ''} className="input input-bordered w-full text-lg font-semibold" />
                        <input name='number' type="text" placeholder="Phone Number" className="input input-bordered w-full text-lg font-semibold" />
                        <input type="submit" value='SUBMIT' className="btn btn-secondary w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;