import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading/Loading';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    
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
    const [token] = useToken(user)
    
    useEffect(()=>{
        if (token) {
            navigate(from, { replace: true })
        }
    },[from,navigate,token])
    
    if(updating || loading){
        return <Loading></Loading>
    }
    let signupError;
    if(error){
        signupError = <p className='text-red-500'><small>{error.message}</small></p>
      }
      const onSubmit = async data => {
          const name = data?.name
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({displayName:name})
    };
    return (
        <div className='lg:w-1/3 w-full md:w-1/2 p-8 mx-auto my-14 mt-24 shadow-lg'>
            <h3 className='text-2xl text-secondary text-center mb-4'>Signup</h3>
            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-4'>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-bold">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="input input-bordered w-full "
                        {...register("name", {
                            required: {
                                value:true,
                                message:'Name is required'
                            }
                        })}
                    />
                    <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="Email"
                        placeholder="Enter Your Email"
                        className="input input-bordered w-full "
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
                    <label className="label">
                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="Password"
                        placeholder="Enter Your Password"
                        className="input input-bordered w-full"
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
                    <label className="label">
                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    </label>
                </div>
                {signupError}
                <input type="submit" value='signup' className="btn btn-accent text-white w-full" />
                <p>Already have an account? <Link className='text-secondary' to='/login'>Please Login</Link></p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};
export default SignUp;