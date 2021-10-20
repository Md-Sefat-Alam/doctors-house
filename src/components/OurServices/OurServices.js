import React, { useEffect, useState } from 'react';
import ShowService from '../ShowService/ShowService';

const OurServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("serviceData.json")
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <div className='component-container'>
            <div className='container py-5'>
                <h3 className='text-primary'>Services</h3>
                <div className='service_wrapper row'>

                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            services.map(service => <ShowService key={service.id} service={service}></ShowService>
                            )
                        }
                    </div>

                </div>
            </div>

            <div className='container py-5'>
                <div className=''>
                    <h4 className='text-primary'>Enter your problems to emergency service</h4>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Name</label>
                            <input required type="text" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Email</label>
                            <input required type="Email" className="form-control" id="inputPassword4" />
                        </div>
                        <div required className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Problems in Detail</label>
                            <textarea type="text" className="form-control" id="inputdetails" placeholder="Enter your specific problem in details" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">Mobile</label>
                            <input type="tel" className="form-control" id="tel" />
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label class="form-check-label" htmlFor="gridCheck">
                                    immediate issue?
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default OurServices;