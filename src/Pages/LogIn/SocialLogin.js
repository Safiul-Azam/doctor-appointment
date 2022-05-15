import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate =useNavigate()
    const location =useLocation()
    const from = location.state?.from?.pathname || "/"
    if(user){
        console.log(user)
        navigate(from , {replace:true})
    }
    return (
        <div>
            <div className="divider text-accent">OR</div>
            <button onClick={()=>signInWithGoogle()} className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
        </div>
    );
};

export default SocialLogin;