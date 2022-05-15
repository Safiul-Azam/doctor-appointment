import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from './SocialLogin';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
        console.log(data);
    }
    
    const location = useLocation()
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const from = location.state?.from?.pathname || "/";
      let loginError;
      useEffect(()=>{
        if (user) {
            navigate(from, { replace: true })
        }
    },[from,navigate,user])

      if(error){
        loginError = <p className='text-red-500'><small>{error.message}</small></p>
      }
      
      if(loading){
         return <Loading></Loading>
      }
     
    return (
        <div className='w-1/3 p-8 mx-auto mt-24 mb-16 shadow-lg'>
            <h3 className='text-2xl text-secondary text-center mb-4'>login</h3>
            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-4'>
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
                    <button className="btn btn-ghost">Forgat Password</button>
                    <label className="label">
                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    </label>
                </div>
                {loginError}
                <input type="submit" value='SUBMIT' className="btn btn-accent text-white w-full" />
                <p className='text-accent'>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Create new account</Link></p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;