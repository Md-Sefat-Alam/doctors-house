import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
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
    }
    const handleEmailPasswordLogin = (e,) => {
        e.preventDefault()
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUserData(result.user);
            })
            .catch(error => {
                setError(error.code)
            })
    }

    return (
        <div className='component-container container'>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
            }}>
                <div className='w-75'>
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

                        <div className='d-flex justify-content-between m-2'>
                            <button type="submit" className="btn btn-primary">Sign in</button>
                            <Link to='./register' className='btn btn-warning'>Register?</Link>
                        </div>
                    </form>
                </div>
                <div className='mt-5'>
                    <h3 className='fw-bold text-primary'>Also Join With</h3>
                    <div className=''>
                        <i onClick={handleGoogleLogin} style={{
                            userSelect: 'none',
                            cursor: 'pointer',
                            color: 'tomato',
                            padding: '10px'
                        }} className="fab fa-google-plus-square fs-1"></i>
                        <i onClick={handleGithubLogin} style={{
                            userSelect: 'none',
                            cursor: 'pointer',
                            color: '#1a75c3',
                            padding: '10px'
                        }} className="fab fa-facebook-square fs-1"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;