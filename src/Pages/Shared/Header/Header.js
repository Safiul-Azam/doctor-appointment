import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || "/"
    const handleSignOut = () => {
        signOut(auth)
        navigate(from, { replace: true })
        localStorage.removeItem('accessToken')
    }
    const menus = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/reviews'>Reviews</Link></li>
        <li><Link to='/about'>About us</Link></li>
        <li><Link to='/contact-Us'>contact-Us</Link></li>
        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>
        }
        {user ? <li><button onClick={handleSignOut}>sign Out <span>{user.displayName}</span></button></li> :
            <li><Link to='/login'>Login</Link></li>}
    </>

    return (
        <div>
            <div className="navbar bg-base-100 z-10 fixed top-0 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menus}
                        </ul>
                    </div>
                    <Link to='/home' className="btn btn-ghost normal-case text-xl">Doctor Appointment</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menus}
                    </ul>
                </div>
                <div className="navbar-end">
                <label tabIndex="1" htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>    
                </div>
            </div>
        </div>
    );
};

export default Header;