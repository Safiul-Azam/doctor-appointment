import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate =useNavigate()
    const location =useLocation()
    const [token] = useToken(user)
    const from = location.state?.from?.pathname || "/"
    useEffect(()=>{
        if (token) {
            navigate(from, { replace: true })
        }
    },[from,navigate,token])
    return (
        <div>
            <div className="divider text-accent">OR</div>
            <button onClick={()=>signInWithGoogle()} className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
        </div>
    );
};

export default SocialLogin;