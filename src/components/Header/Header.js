import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { userData, logOut } = useAuth();

    const { displayName, photoURL, email } = userData;
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid">
            <div className="container">
                <Link style={{ userSelect: 'none' }} className="navbar-brand siteName fs-1 fw-bolder" to='/home'>Doctor's <span className='text-warning'>House</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/services" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Need
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <div className='d-flex'>
                                    <div>
                                        <li><Link className="dropdown-item" to="/doctor">Dentist</Link></li>
                                        <li><Link className="dropdown-item" to="/doctor">Face Specialist</Link></li>
                                        <li><Link className="dropdown-item" to="/doctor">Hart Specialist</Link></li>
                                        <li><Link className="dropdown-item" to="/doctor">Bones Specialist</Link></li>
                                        <li><Link className="dropdown-item" to="/doctor">Brain Specialist</Link></li>
                                        <li><Link className="dropdown-item" to="/doctor">Eye Specialist</Link></li>
                                        <li><Link className="dropdown-item" to="/doctor">Sexual</Link></li>
                                        <li><Link className="dropdown-item" to="/doctor">Pregnant</Link></li>
                                        <li><Link className="dropdown-item" to="/doctor">Surgery</Link></li>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/doctor">Doctors</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about-us">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/faq">FAQ</Link>
                        </li>

                        {
                            !userData.accessToken ? <li className="nav-item">
                                <Link className="nav-link text-primary fw-bolder" to="/login">Login</Link>
                            </li>
                                :
                                <div className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle d-block" to="/user" id="navbarDropdownUser" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span style={{ display: 'inline-block', borderRadius: '50%', overflow: 'hidden' }}>
                                            <img src={photoURL ? photoURL : "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"} alt="user" />
                                        </span>
                                    </Link>
                                    <ul className="dropdown-menu userDropDown" aria-labelledby="navbarDropdownUser">
                                        <div className='d-flex flex-column'>
                                            <div className='userImage'>
                                                <img src={photoURL ? photoURL : "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"} alt="user" />
                                            </div>
                                            <div>
                                                <h4>{displayName ? displayName : 'What is your name?'}</h4>
                                                <p>{email && email}</p>
                                            </div>
                                            <div>
                                                <button onClick={logOut} className='btn btn-danger'>Log out</button>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                        }
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Header;