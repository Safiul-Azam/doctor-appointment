import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import ManageSingleDoctor from './ManageSingleDoctor';

const ManageDoctor = () => {
    const { data: doctor, isLoading,refetch } = useQuery('doctor', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>manage doctor:{doctor.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           doctor.map((singleDoctor,index) => <ManageSingleDoctor
                           key={singleDoctor._id}
                           singleDoctor={singleDoctor}
                           index={index}
                           refetch={refetch}
                           ></ManageSingleDoctor>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctor;