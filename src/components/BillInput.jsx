import React from 'react';

const BillInput = ({ id, value, onChange }) => {
  return (
    <>
      <h1>Bill</h1>
      <label htmlFor={id}>
        <input
          value={value}
          onChange={onChange}
          className={id}
          id={id}
          type="number"
          min="0"
        />
      </label>
    </>
  );
};

export default BillInput;