"use client";
import { createOrder } from "@/app/actions";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useState } from "react";

const initialOptions = {
  clientId: process.env.PAYPAL_CLIENT_ID || "",
};

const PaypalButton = () => {
  console.log("initialOptions", initialOptions);
  return (
    <>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons createOrder={createOrder} />
      </PayPalScriptProvider>
    </>
  );
};

export default PaypalButton;
