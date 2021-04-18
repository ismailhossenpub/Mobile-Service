import React from "react";
import "./ProcessPayment.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SplitCardForm from "./SplitCardForm";
import SimpleCardForm from "./SimpleCardForm";

const stripePromise = loadStripe(
  "pk_test_51IeCLKGWzbeI9VzkamcA4rnbt4AkHSulJb3FtMWosJIarJrWyahGE23bgVz0moJKEK80h2eGh5mzOYZJ2XqGOHzM00G916YUCE"
);

const ProcessPayment = ({handlePayment}) => {
  return (
    <Elements stripe={stripePromise}>
     <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
    </Elements>
  );
};

export default ProcessPayment;
