import React from 'react';
import './ResultDisplay.css';

const ResultDisplay = ({ tipAmount, totalAmount }) => {
  return (
    <div className="result-txt">
      <div className="text-amount">
        <div>
          <h2>Tip Amount</h2>
          <p>/ person</p>
        </div>
        <h3>${tipAmount.toFixed(2)}</h3>
      </div>
      <div className="total-amount">
        <div>
          <h2>Total</h2>
          <p>/ person</p>
        </div>
        <h3>${totalAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default ResultDisplay;