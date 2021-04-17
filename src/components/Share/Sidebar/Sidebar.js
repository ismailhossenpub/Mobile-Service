import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/book" className="text-white">
                         <span>Book</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/booking" className="text-white">
                         <span>Booking</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-white">
                         <span>Review</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white"> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;