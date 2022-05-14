import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';

const SignUp = () => {
    const navigate = useNavigate()
    const location =useLocation()
    const from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      if(user){
        navigate(from ,{replace:true})
      }
    const handleSubmit = async e => {
        e.preventDefault()
        const displayName = e.target.name.value 
        const email = e.target.email.value 
        const password = e.target.password.value
        console.log(email, password)
        await createUserWithEmailAndPassword(email,password)
        await updateProfile({ displayName});
        alert('Updated profile');
    }
    return (
        <div className='w-1/3 p-8 mx-auto my-14 shadow-lg'>
            <h3 className='text-2xl text-secondary text-center mb-4'>Signup</h3>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4'>
                <div>
                    <label className='text-base text-accent font-semibold' htmlFor="name">Name</label>
                    <input type="text" name='name' id='name' placeholder="Your Name" className="input input-bordered w-full" />
                </div>
                <div>
                    <label className='text-base text-accent font-semibold' htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' placeholder="Enter Email" className="input input-bordered w-full" />
                </div>
                <div>
                    <label className='text-base text-accent font-semibold' htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' placeholder="Password" className="input input-bordered w-full" />
                </div>
                <input type="submit" value='SIGNUP' className="btn btn-accent text-white w-full" />
                <p>Already have an account? <Link className='text-secondary' to='/login'>Please Login</Link></p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};
export default SignUp;