import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../images/images/footer.png'

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div style={{
            background: `url(${footer})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }} >
            <footer className="footer pb-16 pt-10 text-neutral-content px-12">
                <div>
                    <span className="footer-title text-accent">Services</span>
                    <Link to="/home" className="link link-hover text-accent">Emergency Checkup</Link>
                    <Link to="/home" className="link link-hover text-accent">Monthly Checkup</Link>
                    <Link to="/home" className="link link-hover text-accent">Weekly Checkup</Link>
                    <Link to="/home" className="link link-hover text-accent">Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title text-accent">ORAL HEALTH</span>
                    <Link to="/home" className="link link-hover text-accent">Fluoride Treatment</Link>
                    <Link to="/home" className="link link-hover text-accent">Cavity Filling</Link>
                    <Link to="/home" className="link link-hover text-accent">Teath Whitening</Link>
                </div>
                <div>
                    <span className="footer-title text-accent">OUR ADDRESS</span>
                    <Link to="/home" className="link link-hover text-accent">New York - 101010 Hudson</Link>
                </div>
            </footer>
            <div className='text-center pb-10 text-black'>
                <span>&copy; Copyright {year} All Rights Reserved</span>
            </div>
        </div>
    );
};

export default Footer;