import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';



const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://lit-meadow-67847.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
       <section className="testimonials mt-5 py-5 ">
           <div className="container">
               <div className="section-header">
                   <h5 className="text-primary text-uppercase">Reviews</h5>
                   <h1>What is Your Quote for Us</h1>
               </div>
               <div className="d-flex justify-content-center">
               <div className=" row mt-5">
                    {
                        reviews.map(testimonial => <Testimonial key={testimonial._id} testimonial={testimonial} />)
                    }
                </div>
                </div>
           </div>
       </section>
    );
};

export default Testimonials;