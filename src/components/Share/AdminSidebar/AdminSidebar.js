import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./AdminSidebar.css";

const AdminSidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  console.log(loggedInUser.name);
  useEffect(() => {
    fetch("https://lit-meadow-67847.herokuapp.com/isAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  });
  console.log("Email", loggedInUser.email);
  console.log(isAdmin);
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/admin" className="text-white">
            <span>Admin Site</span>
          </Link>
        </li>
        {isAdmin && (
          <div>
            <li>
              <Link to="allOrder" className="text-white">
                <span>All Order List</span>
              </Link>
            </li>
            <li>
              <Link to="/addService" className="text-white">
                <span>Add Service</span>
              </Link>
            </li>
            <li>
              <Link to="/makeAdmin" className="text-white">
                <span>Make Admin</span>
              </Link>
            </li>
            <li>
              <Link to="/manageBook" className="text-white">
                <span>Manage Service</span>
              </Link>
            </li>
          </div>
        )}
      </ul>
      <div>
        <ul className="list-unstyled ">
          <li>
            <Link to="/" className="text-white">
              {" "}
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
