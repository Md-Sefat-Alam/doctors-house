import React from 'react';
import { Link } from 'react-router-dom';

const ShowService = (props) => {
    const { topic, detail, img_url } = props.service;

    return (
        <div className="col">
            <div className="card h-100">
                <img src={img_url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{topic}</h5>
                    <p className="card-text">{detail}</p>

                </div>
                <Link to={`/service/${topic}`} className='btn btn-primary w-50'>Go to next</Link>
            </div>
        </div>
    );
};

export default ShowService;