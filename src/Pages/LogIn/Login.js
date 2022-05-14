import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const from = location.state?.from?.pathname || "/";
      if(user){
        navigate(from, { replace: true });
      }
    const handleSubmit = e =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        signInWithEmailAndPassword(email, password)
    }  
    return (
        <div className='w-1/3 p-8 mx-auto my-20 shadow-lg'>
            <h3 className='text-2xl text-secondary text-center mb-4'>login</h3>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4'>
                <div>
                    <label htmlFor="email" className='text-base text-accent font-semibold'>Email</label>
                    <input type="email" id='email' placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div>
                    <label className='text-base text-accent font-semibold' htmlFor="password">Password</label>
                    <input type="password" id='password' placeholder="Password" className="input input-bordered w-full" />
                    <p className='text-sm text-accent'>Forgot Password?</p>
                </div>
                <input type="submit" value='SUBMIT' className="btn btn-accent text-white w-full" />
                <p className='text-accent'>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Create new account</Link></p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;