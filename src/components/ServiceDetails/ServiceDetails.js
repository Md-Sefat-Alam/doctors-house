import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { service_detail } = useParams()

    return (
        <div className='component-container'>
            <div className='container my-5'>
                <h2>{service_detail} Form</h2>

                <div className=''>
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
                            <textarea type="text" className="form-control" id="inputCity" />
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

export default ServiceDetails;