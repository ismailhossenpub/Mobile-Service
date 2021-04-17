import React from 'react';
import { useHistory } from 'react-router';

const ServicesDetail = ({service}) => {
    const history = useHistory();
    const Checkout = (serviceId) =>{
        history.push(`/checkout/${serviceId}`);
    }
    return (
        <div className="col-md-4 text-center">
            <img style={{height:'50px'}} src={service.image} alt=""/>
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary">{service.description}</p>
            <h2>${service.price}</h2>
            <button onClick={Checkout} className="btn btn-success">Buy Now</button>
        </div>
    );
};

export default ServicesDetail;