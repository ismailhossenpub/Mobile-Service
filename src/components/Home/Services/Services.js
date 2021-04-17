import React, { useEffect, useState } from 'react';
import ServicesDetail from '../ServicesDetail/ServicesDetail';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5500/service')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <section className="services-container my-5">
            <div className="text-center">
                <h5 style={{color:'#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
            {
                services.map(service => <ServicesDetail key={service._id} service={service}></ServicesDetail>)
            }
            </div>
        </div>
        </section>
    );
};

export default Services;