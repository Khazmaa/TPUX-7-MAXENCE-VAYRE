import React from "react";
import Navigation from "../components/Navigation";

const ErrorPage = () => {
  return (
    <div>
      
      <Navigation />
      <h3>You are using the wrong testnet. Be sure to be connected to Sepolia Testnet. </h3>
      
    </div>
  );
};

export default ErrorPage;