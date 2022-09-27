import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const ManageSingleDoctor = ({ singleDoctor,index,refetch }) => {
    const { name, img, specialty,email } = singleDoctor
    const MySwal = withReactContent(Swal)

    const handleDeleteDoctor = ()=>{
        fetch(`http://localhost:5000/doctor/${email}`,{
            method:'DELETE',
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                MySwal.fire({
                    title:<strong>Doctor is Go out from doctor appointment</strong>,
                    html:<p>{name}  &  {email}</p>,
                    icon:'success'
                })
                refetch()
            }
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td><button onClick={handleDeleteDoctor} className="btn btn-xs btn-error">delete</button></td>
        </tr>
    );
};

export default ManageSingleDoctor;