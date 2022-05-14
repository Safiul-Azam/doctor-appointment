import React from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value 
        const password = e.target.password.value
        console.log(email, password)
        createUserWithEmailAndPassword(email,password)
    }

    return (
        <div className='w-1/3 p-8 mx-auto my-18 shadow-lg'>
            <h3 className='text-xl text-secondary text-center mb-4'>Signup</h3>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4'>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' id='name' placeholder="Your Name" className="input input-bordered w-full" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' placeholder="Enter Email" className="input input-bordered w-full" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' placeholder="Password" className="input input-bordered w-full" />
                    <p>Forgot Password?</p>
                </div>
                <input type="submit" value='SIGNUP' className="btn btn-accent text-white w-full" />
                <p>Already have an account? <Link className='text-secondary' to='/login'>Please Login</Link></p>
            </form>
        </div>
    );
};
export default SignUp;