import React from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const UserRow = ({ user, refetch }) => {
    const MySwal = withReactContent(Swal)
    const { email, _id, role } = user
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            if (res.status === 403) {
                MySwal.fire({
                    title: <strong>You can't make admin</strong>,
                    icon: 'error',
                })
            }
            return res.json()
        })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    MySwal.fire({
                        title: <strong>Successfully made an admin</strong>,
                        html: <i>{email} {role}</i>,
                        icon: 'success'
                    })
                }
            })
    }
    return (
        <tr>
            <th>{_id}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Create</button>}</td>
            <td><button className="btn btn-xs">Delete</button></td>
        </tr>
    );
};

export default UserRow;