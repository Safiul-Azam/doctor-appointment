import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';
import { useForm } from "react-hook-form";

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    if (user) {
        navigate(from, { replace: true })
    }
    return (
        <div className='w-1/3 p-8 mx-auto my-14 mt-24 shadow-lg'>
            <h3 className='text-2xl text-secondary text-center mb-4'>Signup</h3>
            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-4'>
                <div class="form-control w-full ">
                    <label class="label">
                        <span class="label-text font-bold">Name</span>
                    </label>
                    <input
                        type="Name"
                        placeholder="Enter Your Name"
                        class="input input-bordered w-full "
                        {...register("Name", {
                            required: {
                                value:true,
                                message:'Name is required'
                            }
                        })}
                    />
                    <label class="label">
                    {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
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
                    <label class="label">
                    {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                    {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                    </label>
                </div>
                <input type="submit" value='signup' className="btn btn-accent text-white w-full" />
                <p>Already have an account? <Link className='text-secondary' to='/login'>Please Login</Link></p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};
export default SignUp;