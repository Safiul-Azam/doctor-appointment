import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-1/3 p-8 mx-auto my-20 shadow-lg'>
            <h3 className='text-xl text-secondary text-center'>login</h3>
            <form className='grid grid-cols-1 gap-4'>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' placeholder="Password" class="input input-bordered w-full" />
                    <p>Forgot Password?</p>
                </div>
                <input type="submit" value='SUBMIT' class="btn btn-accent text-white w-full" />
                <p>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Create new account</Link></p>
            </form>
        </div>
    );
};

export default Login;