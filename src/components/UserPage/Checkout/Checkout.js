import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  getDatabaseCart,
  processOrder,
} from "../../../utilities/databaseManager";
import { UserContext } from "../../../App";
import "./Checkout.css";
import ProcessPayment from "../ProcessPayment/ProcessPayment";
import Sidebar from "../../Share/Sidebar/Sidebar";

const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};

const Checkout = () => {
  const { serviceId } = useParams();
  const [book, setBook] = useState({});
  const [order, setOrder] = useState({});
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [shippingData, setShippingData] = useState(null);

  useEffect(() => {
    fetch(`https://lit-meadow-67847.herokuapp.com/book/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);
  const onSubmit = (data) => {
    const newData = {
      ...book,
    };
    newData.newInfo = data;
    setShippingData(newData);
  };
  const handlePaymentSuccess = (paymentId) => {
    const orderDetails = {
      ...loggedInUser,
      products: shippingData,
      paymentId,
      orderTime: new Date(),
    };
    console.log(orderDetails);
    fetch("https://lit-meadow-67847.herokuapp.com/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setOrder();
          processOrder();
          alert("Your order is successful");
        }
      });
  };
  return (
    <section>
      <div style={containerStyle} className="container-fluid row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 d-flex justify-content-center">
          <div className="row">
            <div style={{ display: shippingData ? "none" : "block" }}>
              <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                  name="name"
                  defaultValue={loggedInUser.name}
                  ref={register({ required: true })}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <span className="error">The name is required</span>
                )}

                <input
                  name="email"
                  defaultValue={loggedInUser.email}
                  ref={register({ required: true })}
                  placeholder="Your Email"
                />
                {errors.email && (
                  <span className="error">The email is required</span>
                )}

                <input
                  name="address"
                  ref={register({ required: true })}
                  placeholder="Your Address"
                />
                {errors.address && (
                  <span className="error">The address is required</span>
                )}

                <input
                  name="phone"
                  ref={register({ required: true })}
                  placeholder="Your Phone Number"
                />
                {errors.phone && (
                  <span className="error">The phone is required</span>
                )}
                <input type="submit" />
              </form>
            </div>
            <div
              style={{ display: shippingData ? "block" : "none" }}
              className="mt-5"
            >
              <h3>Please Pay for me</h3>
              <ProcessPayment
                handlePayment={handlePaymentSuccess}
              ></ProcessPayment>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
