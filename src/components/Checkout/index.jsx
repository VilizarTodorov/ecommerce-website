import React from "react";
import PaymentDetails from "../PaymentDetails";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { publishableKey } from "../../Stripe/config";
import { withAuthorizationFunction } from "../../HOC";

const stripePromise = loadStripe(publishableKey);

const Checkout = (props) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentDetails></PaymentDetails>
    </Elements>
  );
};

const condition = (user) => user;

export default withAuthorizationFunction(condition)(Checkout);
