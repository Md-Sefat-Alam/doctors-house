import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { googleSignIn, setEmailPassword, emailPasswordLogin } = useAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleEmailPasswordLogin = (e) => {
        e.preventDefault()        
        setEmailPassword({
            email: email,
            password: password
        })
        emailPasswordLogin();
    }

    return (
        <div className='component-container container'>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '90vh'
            }}>
                <div className='w-50'>
                    <form onSubmit={handleEmailPasswordLogin}>
                        <h3 className='fw-bold text-primary py-3'>Please Login</h3>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input onBlur={handleEmail} required type="email" className="form-control" id="inputEmail3" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label required htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword3" />
                            </div>
                        </div>

                        <div className='d-flex justify-content-between'>
                            <button type="submit" className="btn btn-primary">Sign in</button>
                            <Link to='./home' className='btn btn-warning'>Register?</Link>
                        </div>
                    </form>
                </div>
                <div className='mt-5'>
                    <h3 className='fw-bold text-primary'>Also Join With</h3>
                    <div>
                        <i onClick={googleSignIn} style={{
                            userSelect: 'none',
                            cursor: 'pointer',
                            color: 'tomato',
                            padding: '10px'
                        }} class="fab fa-google-plus-square fs-1"></i>
                        <i style={{
                            userSelect: 'none',
                            cursor: 'pointer',
                            color: '#1a75c3',
                            padding: '10px'
                        }} class="fab fa-facebook-square fs-1"></i>
                        <i style={{
                            userSelect: 'none',
                            cursor: 'pointer',
                            color: '#1a75c3',
                            padding: '10px'
                        }} class="fab fa-twitter-square fs-1"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;