import React from 'react';

const FAQ = () => {
    return (
        <div className='component-container container'>
            <div>
                <div className='py-4'>
                    <h3 className='text-primary'>Have any Question?</h3>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">Question Title</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Question title" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">Question Details</label>
                        <textarea type="text" rows='5' className="form-control" id="formGroupExampleInput2" placeholder="Enter Question in details" />
                    </div>
                </div>

                <div className='py-5'>
                    <h3 className='text-primary'>FAQ</h3>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    What type of health insurance plans do you accept?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">For your convenience, we file most types of insurance, including Medicare, Medicaid, Individual and Commercial plans. For a complete list of insurance companies and accepted Health plans, please visit our Insurance page under Patient Resources. Insurance plans accepted</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Why is having a primary care physician so important?
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Choosing a primary care doctor is a great way to maintain exceptional health throughout the course of your life. In addition to treating acute illnesses, your primary care physician can partner with you to meet your long term health goals and needs. Patient and Physician relationship can translate into continued health and enhanced quality of life.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Do I need a referral from my Primary Care Physician to see a specialist?
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">As your primary care physician and care taker, we prefer you come and see your primary care physician before seeing a specialist. Your physician will determine whether you need to be seen by a specialist due to your medical condition. If you need a referral or authorization, your doctor will coordinate with our internal referral staff members, based on your health plan requirements.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FAQ;