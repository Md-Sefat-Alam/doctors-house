import React from 'react';

const AboutUs = () => {
    return (
        <div className='component-container container'>
            <div className='py-4'>
                <h3 className='text-primary'>About Us</h3>
                <div className='d-flex justify-content-center'>
                    <img src="https://image.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg" alt="" className="img-fluid" />
                </div>
                <div>
                    <h4 className='text-secondary'>We are a online service provider</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo harum officiis pariatur eius hic, temporibus vel tenetur provident itaque corrupti! Quidem adipisci, inventore illum ad alias exercitationem iusto sapiente! Delectus, distinctio esse vero minus sunt sapiente quidem molestiae earum officiis tempore numquam est nobis. Animi numquam, exercitationem vero iste, quos inventore voluptate temporibus eveniet ducimus debitis cumque sint dolor id, itaque eaque sapiente amet voluptatum veritatis? Nam eius in harum culpa illum veritatis aliquid consequatur beatae alias error. Sed expedita alias possimus tempore minima natus magni voluptatum, quis esse autem laborum quae amet reprehenderit. Sed omnis impedit qui nostrum sapiente.</p>
                </div>
            </div>
            <div className='py-5'>
                <h3 className='text-primary'>Location</h3>
                <iframe className='w-100' title="This is a unique title" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.266702224856!2d88.58423721436095!3d24.372023870662648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbef02d4899947%3A0x6c5031675c0796a8!2z4Kaw4Ka-4Kac4Ka24Ka-4Ka54KeAIOCmruCnh-CmoeCmv-CmleCnh-CmsiDgppXgprLgp4fgppwg4Ka54Ka-4Ka44Kaq4Ka-4Kak4Ka-4Kay!5e0!3m2!1sbn!2sbd!4v1634653093766!5m2!1sbn!2sbd" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    );
};

export default AboutUs;