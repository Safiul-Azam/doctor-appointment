import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {
        const name = data?.name

    };
    return (
        <div>
            <h3>Add New Doctor</h3>
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
                                value: true,
                                message: 'Name is required'
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
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid email'
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
                                value: true,
                                message: 'Password is required'
                            },
                            minLength: {
                                value: 6,
                            }
                        })}
                    />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    </label>
                </div>
                <input type="submit" value='Add Doctor' className="btn btn-accent text-white w-full" />
            </form>
        </div>
    );
};

export default AddDoctor;