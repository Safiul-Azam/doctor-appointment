import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointment = () => {
  const [appointment, setAppointment] = useState([])
  const [user] = useAuthState(auth)
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patientEmail=${user.email}`)
        .then(res => res.json())
        .then(data => setAppointment(data))
    }
  }, [user])
  return (
    <div>
      <div class="overflow-x-auto px-12">
        <table class="table border-2 w-full">
          <thead>
            <tr>
              <th>_id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Slot</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody className='border'>
            {
              appointment.map(booked => <tr>
                <th>{booked._id}</th>
                <td>{booked.patient}</td>
                <td>{booked.patientEmail}</td>
                <td>{booked.date}</td>
                <td>{booked.slot}</td>
                <td>{booked.treatment}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;