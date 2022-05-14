import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='w-1/3 p-8 mx-auto my-18 shadow-lg'>
            <h3 className='text-xl text-secondary text-center mb-4'>Signup</h3>
            <form className='grid grid-cols-1 gap-4'>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' id='name' placeholder="Your Name" class="input input-bordered w-full" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' placeholder="Enter Email" class="input input-bordered w-full" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' placeholder="Password" class="input input-bordered w-full" />
                    <p>Forgot Password?</p>
                </div>
                <input type="submit" value='SIGNUP' class="btn btn-accent text-white w-full" />
                <p>Already have an account? <Link className='text-secondary' to='/login'>Please Login</Link></p>
            </form>
        </div>
    );
};
export default SignUp;