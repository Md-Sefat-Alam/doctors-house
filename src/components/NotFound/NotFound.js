import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='component-container container'>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <img src="https://image.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg" alt="" className="img-fluid" />
                    <Link to='/home' className="btn btn-warning text-white fw-bold">Go to Home?</Link>
                </div>

            </div>
            sorry page not found
        </div>
    );
};

export default NotFound;