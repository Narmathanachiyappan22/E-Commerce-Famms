import React, { useState } from "react";
import './Address.css'

const Address = () => {

  const [confirmed, setConfirmed] = useState(false);

  const confirmOrder = () => {
    setConfirmed(true);
  };

  return (
    <div className="add_container mt-5">

      <h2>Delivery Address</h2>

      <input
        type="text"
        placeholder="Enter Your Name"
        className="form-control mb-3"
      />

      <input
        type="text"
        placeholder="Enter Address"
        className="form-control mb-3"
      />

      <input
        type="text"
        placeholder="Enter Mobile Number"
        className="form-control mb-3"
      />

      <h3 className="mt-4">Payment Mode</h3>

      <div className="add_form-check">
        <input
          className="form-check-input"
          type="radio"
          name="payment"
        />
        <label className="form-check-label">
          Cash on Delivery
        </label>
      </div>

      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="radio"
          name="payment"
        />
        <label className="form-check-label">
          UPI Payment
        </label>
      </div>

      <button
        className="btn btn-success"
        onClick={confirmOrder}
      >
        Confirm Order
      </button>

      {
        confirmed && (
          <h3 className="text-success mt-4">
            ✅ Order Confirmed
          </h3>
        )
      }

    </div>
  );
};

export default Address;