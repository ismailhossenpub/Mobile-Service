import React from 'react';
import "./Testimonial.css";

const Testimonial = ({testimonial}) => {
    return (
        <div className="card shadow-sm col-md-4 me-4  Testimonial-container mt-2" >
            <div className="card-body">
                <p className="card-text text-center">{testimonial.quote}</p>
            </div>
            <div className=" d-flex  align-items-center">
                <img className="mx-3" src={testimonial.image} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">{testimonial.name}</h6>
                    <p className="m-0">{testimonial.from}</p>
                </div>
            </div>
       </div>
    );
};

export default Testimonial;