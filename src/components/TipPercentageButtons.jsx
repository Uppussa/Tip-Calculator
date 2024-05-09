import React from 'react';

const TipPercentageButtons = ({ setPercentage, percentage }) => {
  const buttonList = [5, 10, 15, 25, 50];

  return (
    <>
      <h2>Select Tip %</h2>
      <ul>
        {buttonList.map((button) => (
          <li key={button} id={`percentage-${button}`}>
            <button
              type="button"
              className={`percentage-button ${
                percentage === button ? 'active' : ''
              }`}
              value={button}
              onClick={(e) => setPercentage(button)}
            >
              {button}%
            </button>
          </li>
        ))}
        <li>
          <input
            type="number"
            placeholder="Custom"
            id="Custom-percentage-button"
            className="percentage-button"
            value={percentage === 0 ? '' : percentage}
            onChange={(e) => setPercentage(parseInt(e.target.value))}
          />
        </li>
      </ul>
    </>
  );
};

export default TipPercentageButtons;