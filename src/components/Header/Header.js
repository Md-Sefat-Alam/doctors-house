import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid">
            <div className="container">
                <Link style={{ userSelect: 'none' }} className="navbar-brand siteName fs-1 fw-bolder" to='/home'>Doctor's <span className='text-warning'>House</span></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
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
                                        <li><Link className="dropdown-item" to="/">Dentist</Link></li>
                                        <li><Link className="dropdown-item" to="/">Face Specialist</Link></li>
                                        <li><Link className="dropdown-item" to="/">Hart Specialist</Link></li>
                                        <li><Link className="dropdown-item" to="/">Bones Specialist</Link></li>
                                        <li><Link className="dropdown-item" to="/">Brain Specialist</Link></li>
                                        <li><Link className="dropdown-item" to="/">Eye Specialist</Link></li>
                                        <li><Link className="dropdown-item" to="/">Sexual</Link></li>
                                        <li><Link className="dropdown-item" to="/">Pregnant</Link></li>
                                        <li><Link className="dropdown-item" to="/">Surgery</Link></li>
                                    </div>
                                    <div>
                                        <li><Link className="dropdown-item" to="/">Dentist</Link></li>
                                        <li><Link className="dropdown-item" to="/">Face Specialist</Link></li>
                                        <li><Link className="dropdown-item" to="/">Hart Specialist</Link></li>
                                        <li><Link className="dropdown-item" to="/">Bones Specialist</Link></li>
                                        <li><Link className="dropdown-item" to="/">Brain Specialist</Link></li>
                                        <li><Link className="dropdown-item" to="/">Eye Specialist</Link></li>
                                        <li><Link className="dropdown-item" to="/">Sexual</Link></li>
                                        <li><Link className="dropdown-item" to="/">Pregnant</Link></li>
                                        <li><Link className="dropdown-item" to="/">Surgery</Link></li>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#">Doctors</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-danger" to="/#">Live</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#">FAQ</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;