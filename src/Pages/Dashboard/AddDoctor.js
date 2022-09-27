import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Loading from '../Shared/Loading/Loading';

const AddDoctor = () => {
    const MySwal = withReactContent(Swal)
    const { register, formState: { errors }, handleSubmit ,reset } = useForm();

    const {data:services,isLoading} = useQuery('services',()=>fetch('http://localhost:5000/services')
    .then(res => res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    //api key from imgBB
    const imageStorageKey = 'd30cbfe4a2fb6ef6a0ff1a48904eda11';

    const onSubmit = async data => {
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url,{
            method:'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
           if(result.success){
            const img = result.data.url
            const doctor = {
                name:data.name,
                email:data.email,
                specialty:data?.specialty,
                img:img
            }
            fetch('http://localhost:5000/doctor',{
                method:'POST',
                headers:{
                    'content-type':'application/json',
                    authorization :`Bearer ${localStorage.getItem('accessToken')}`
                },
                body:JSON.stringify(doctor)
            })
            .then(res => res.json())
            .then(inserted => {
               if(inserted.insertedId){
                reset()
                MySwal.fire({
                    title:<strong>Added a New Doctor</strong>,
                    html:<p>{doctor.name}&{doctor.email}</p>,
                    icon:'success'
                })
               }
            })
           }
        })
        
    };
    return (
        <div  className='lg:w-1/2 w-full md:w-1/2 p-8 mx-auto my-10 border-2 shadow-lg'>
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
                        <span className="label-text">Specialty</span>
                    </label>
                    <select
                    {...register('specialty')}
                     className="select input-bordered w-full"
                     >
                         {
                           services.map(service => <option
                           key={service._id}
                           value={service.name}
                           >{service.name}</option>)  
                         }
                    </select>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-bold">Photo Url</span>
                    </label>
                    <input
                        type="file"
                        placeholder="image"
                        className="input input-bordered w-full "
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'image is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <input type="submit" value='Add Doctor' className="btn btn-accent text-white w-full" />
            </form>
        </div>
    );
};

export default AddDoctor;