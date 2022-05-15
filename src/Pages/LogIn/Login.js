import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
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
    // const handleSubmit = e =>{
    //     e.preventDefault()
    //     const email = e.target.email.value
    //     const password = e.target.password.value
    //     signInWithEmailAndPassword(email, password)
    // }  
    return (
        <div className='w-1/3 p-8 mx-auto mt-24 mb-16 shadow-lg'>
            <h3 className='text-2xl text-secondary text-center mb-4'>login</h3>
            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-4'>
            <div class="form-control w-full ">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input
                        type="Email"
                        placeholder="Enter Your Email"
                        class="input input-bordered w-full "
                        {...register("email", {
                            required: {
                                value:true,
                                message:'Email is required'
                            },
                             pattern:{
                                value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message:'Provide a valid email'
                            }
                        })}
                    />
                    <label class="label">
                    {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                    {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>
                <div class="form-control w-full ">
                    <label class="label">
                        <span class="label-text">Password</span>
                    </label>
                    <input
                        type="Password"
                        placeholder="Enter Your Password"
                        class="input input-bordered w-full"
                        {...register("password", {
                            required: {
                                value:true,
                                message:'Password is required'
                            },
                            minLength:{
                                value:6,
                            }
                        })}
                    />
                     <p className='text-sm'>Forgat password?</p>
                    <label class="label">
                    {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                    {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                    </label>
                   
                </div>
                <input type="submit" value='SUBMIT' className="btn btn-accent text-white w-full" />
                <p className='text-accent'>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Create new account</Link></p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;