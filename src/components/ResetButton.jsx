import React from 'react';
import './ResetButton.css';

const ResetButton = ({ onClick }) => {
  return (
    <button type="button" className="reset-button" onClick={onClick}>
      RESET
    </button>
  );
};

export default ResetButton;