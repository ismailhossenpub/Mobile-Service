import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled ">
                <li>
                    <Link to="/checkout/:serviceId" className="text-white">
                         <span>Book</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/order" className="text-white">
                         <span>Booking List</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/addReview" className="text-white">
                         <span>Add Review</span>
                    </Link>
                </li>
            </ul>
            <div>
                <ul className="list-unstyled ">
                    <li>
                    <Link to="/" className="text-white"> <span>Logout</span></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;