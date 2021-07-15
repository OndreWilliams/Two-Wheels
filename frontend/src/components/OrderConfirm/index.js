import React from 'react';
import './OrderConfirm.css'

const OrderConfirm = () => {
  return (
    <div className="confirmation-page">

      <div className="confirmation-box">
        <div className="thank-you">
          Thank you for shopping with Two Wheels!
        </div>
        <div className="confirmation-message">
          Your order will ship within 3 business days. See you on the trails!
        </div>
      </div>
    </div>
  );
};

export default OrderConfirm;
