import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
    const { userData, isLoading } = useAuth();
    if (isLoading) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='component-container'>
            <div className="spinner-border m-5 d-flex" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => userData?.accessToken ? (
                children
            )
                :
                (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivetRoute;