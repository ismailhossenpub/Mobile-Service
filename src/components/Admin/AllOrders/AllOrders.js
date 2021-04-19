import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import AdminSidebar from "../../Share/AdminSidebar/AdminSidebar";
import "./AllOrders.css";
const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};

const AllOrders = () => {
  const [allOrder, setAllOrder] = useState([]);
  console.log(allOrder);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  useEffect(() => {
    fetch("https://lit-meadow-67847.herokuapp.com/getAllOrder")
      .then((res) => res.json())
      .then((data) => setAllOrder(data));
  }, []);
  return (
    <section>
      <div style={containerStyle} className="container-fluid row">
        <div className="col-md-2">
          <AdminSidebar></AdminSidebar>
        </div>
        <div className="col-md-10 d-flex justify-content-center">
          <div className="order">
            <table className="order-table">
              <thead>
                <tr className="line-draw">
                  <th scope="col">Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Date and Time</th>
                </tr>
              </thead>
              {allOrder.map((orders) => (
                <tbody key={orders._id}>
                  <tr className="line-draw">
                    <td>{orders.name}</td>
                    <td> 1 </td>
                    <td>{orders.newInfo.phone}</td>
                    <td>{orders.email}</td>
                    <td>{orders.orderTime}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllOrders;
