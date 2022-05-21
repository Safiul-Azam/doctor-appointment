import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {
  const [appointments, setAppointment] = useState([])
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patientEmail=${user?.email}`, {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then(res => {
          console.log(res)
          if (res.status === 401 || res.status === 403) {
            signOut(auth)
            localStorage.removeItem('accessToken')
            navigate(from, { replace: true })
          }
          return res.json()
        })
        .then(data => setAppointment(data))
    }
  }, [user, navigate, from])
  return (
    <div>
      <div className="overflow-x-auto px-12">
        <table className="table border-2 w-full">
          <thead>
            <tr>
              <th>_id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Slot</th>
              <th>Treatment</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody className='border'>
            {
              appointments.map((appointment, index) => <tr
                key={index}
              >
                <th>{index + 1}</th>
                <td>{appointment.patient}</td>
                <td>{appointment.patientEmail}</td>
                <td>{appointment.date}</td>
                <td>{appointment.slot}</td>
                <td>{appointment.treatment}</td>
                <td>
                  {appointment.price && <Link to={`/dashboard/payment/${appointment._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                </td>

              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;