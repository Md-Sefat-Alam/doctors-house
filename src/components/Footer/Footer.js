import './Footer.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='container-fluid bg-dark text-white'>
            <div className='row container footer-wrapper'>
                <div className='col footer-data'>
                    <Link to='/' style={{ userSelect: 'none' }} className="navbar-brand siteName fs-1 fw-bolder" to='/home'>Doctor's <span className='text-warning'>House</span></Link>
                </div>
                <div className='col footer-data'>
                    <h3>Select Specialist</h3>
                    <ul>
                        <Link to='/'><li>Dentist</li></Link>
                        <Link to='/'><li>Face Specialist</li></Link>
                        <Link to='/'><li>Hart Specialist</li></Link>
                        <Link to='/'><li>Bones Specialist</li></Link>
                        <Link to='/'><li>Brain Specialist</li></Link>
                        <Link to='/'><li>Eye Specialist</li></Link>
                        <Link to='/'><li>Sexual</li></Link>
                        <Link to='/'><li>Pregnant</li></Link>
                        <Link to='/'><li>Surgery</li></Link>
                    </ul>
                </div>
                <div className='col footer-data'>
                    <h3>Top Links</h3>
                    <ul>
                        <Link to='/'><li style={{ color: 'red' }}>Live</li></Link>
                        <Link to='/'><li>Emergency cases</li></Link>
                    </ul>

                    <h3>Join With Us</h3>
                    <ul className='joinWithUs text-white'>
                        <li><a rel="noreferrer" href="https://www.facebook.com/sefat.sefatalam" target='_blank'><i className="fab fa-facebook"></i></a></li>
                        <li><a rel="noreferrer" href="https://www.youtube.com/" target='_blank'><i className="fab fa-youtube"></i></a></li>
                        <li><a rel="noreferrer" href="https://twitter.com/" target='_blank'><i className="fab fa-twitter-square"></i></a></li>
                    </ul>
                </div>
                <div className='bg-dark'>
                    <p className='text-center'>© All Right Resurved By <Link style={{ userSelect: 'none' }} className="navbar-brand siteName fs-6 fw-bolder" to='/home'>Doctor's <span className='text-warning'>House</span></Link></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;