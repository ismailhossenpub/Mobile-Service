import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../../Share/Sidebar/Sidebar";
import "./Orders.css";
const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};

const Orders = () => {
  const [order, setOrder] = useState([]);
  console.log(order);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  useEffect(() => {
    fetch(
      "https://lit-meadow-67847.herokuapp.com/getOrder?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  return (
    <section>
      <div style={containerStyle} className="container-fluid row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 d-flex justify-content-center">
          <div className="order">
            <table className="order-table">
              <thead>
                <tr className="line-draw">
                  <th scope="col">Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Email</th>
                  <th scope="col">Date and Time</th>
                </tr>
              </thead>
              {order.map((orders) => (
                <tbody key={orders._id}>
                  <tr className="line-draw">
                    <td>{orders.name}</td>
                    <td> 1 </td>
                    <td>${orders.price}</td>
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

export default Orders;
