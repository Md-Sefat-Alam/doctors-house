import './Footer.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='container-fluid bg-dark text-white'>
            <div className='row container footer-wrapper'>
                <div className='col footer-data'>
                    <Link style={{ userSelect: 'none' }} className="navbar-brand siteName fs-1 fw-bolder" to='/home'>Doctor's <span className='text-warning'>House</span></Link>
                </div>
                <div className='col footer-data'>
                    <h3>Select Specialist</h3>
                    <ul>
                        <Link><li>Dentist</li></Link>
                        <Link><li>Face Specialist</li></Link>
                        <Link><li>Hart Specialist</li></Link>
                        <Link><li>Bones Specialist</li></Link>
                        <Link><li>Brain Specialist</li></Link>
                        <Link><li>Eye Specialist</li></Link>
                        <Link><li>Sexual</li></Link>
                        <Link><li>Pregnant</li></Link>
                        <Link><li>Surgery</li></Link>
                    </ul>
                </div>
                <div className='col footer-data'>
                    <h3>Top Links</h3>
                    <ul>
                        <Link><li style={{ color: 'red' }}>Live</li></Link>
                        <Link><li>Emergency cases</li></Link>
                    </ul>

                    <h3>Join With Us</h3>
                    <ul className='joinWithUs'>
                        <li><a rel="noreferrer" href="https://www.facebook.com/sefat.sefatalam" target='_blank'><i class="fab fa-facebook"></i></a></li>
                        <li><a rel="noreferrer" href="https://www.youtube.com/" target='_blank'><i class="fab fa-youtube"></i></a></li>
                        <li><a rel="noreferrer" href="https://twitter.com/" target='_blank'><i class="fab fa-twitter-square"></i></a></li>
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