import React, { useState, useEffect } from 'react';
import ShowService from '../ShowService/ShowService';
import './ServicePart.css'


const ServicePart = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("serviceData.json")
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <div className='container py-5'>
            <h3 style={{ textAlign: 'center' }}>Services</h3>
            <div className='service_wrapper row'>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(service => <ShowService key={service.id} service={service}></ShowService>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default ServicePart;