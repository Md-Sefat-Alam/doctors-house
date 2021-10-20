import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import FirebaseInit from '../../Firebase/FirebaseInit';

FirebaseInit()

const Register = () => {
    const { googleSignIn, setUserData, setError, setIsLoading, githubLogin } = useAuth();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                setUserData(result.user);
                history.push(redirect_uri)
                setError('Login Successful')
            })
            .catch(error => {
                setError(error.code);
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                setUserData(result.user);
                history.push(redirect_uri)
                setError('Login Successful')
            })
            .catch(error => {
                setError(error.code);
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
        if (e.target.value.length < 6) {
            if (e.target.value) {
                setError('Enter Minimum 6 char mixing number and character')
            }
        }
    }

    const handleEmailPasswordRegister = (e) => {
        if (password.length < 6) {
            return;
        }
        e.preventDefault()
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('Successfully register and Login')
                history.push(redirect_uri)
            })
            .catch(error => {
                setError(error.code);
            })
            .finally(() => {
            })
    }
    return (
        <div className='component-container container'>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }} className='w-100 py-5'>
                <div className='w-75'>
                    <form onSubmit={handleEmailPasswordRegister}>
                        <h3 className='fw-bold text-warning py-3'>Please Register and Login</h3>
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
                            <button type="submit" className="btn btn-primary">Register</button>
                            <Link to='./login' className='btn btn-warning'>All Ready Have an Account?</Link>
                        </div>
                    </form>
                </div>
                <div className='mt-5'>
                    <h3 className='fw-bold text-primary'>Also Signin With</h3>
                    <div>
                        <i onClick={handleGoogleLogin} style={{
                            cursor: 'pointer',
                            color: 'tomato',
                            padding: '10px'
                        }} className="fab fa-google-plus-square fs-6">Google</i>
                        <i onClick={handleGithubLogin} style={{
                            cursor: 'pointer',
                            color: '#1a75c3',
                            padding: '10px'
                        }} className="fab fa-github-square fs-6">Github</i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;