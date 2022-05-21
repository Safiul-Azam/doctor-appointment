import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import UserRow from './UserRow';

const Users = () => {
    const navigate = useNavigate()
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user',{
        method:'GET',
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res =>{
        if(res.status === 401 || res.status === 403){
            signOut(auth)
            localStorage.removeItem('accessToken')
            navigate('/login')
        }   
         return res.json()
        }))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="overflow-x-auto px-12">
                <table className="table w-1/2 lg:w-full">
                    <thead>
                        <tr>
                            <th>_Id</th>
                            <th>Email</th>
                            <th>Create Admin</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;