import BillInput from './components/BillInput';
import TipPercentageButtons from './components/TipPercentageButtons';
import PeopleInput from './components/PeopleInput';
import ResultDisplay from './components/ResultDisplay';
import ResetButton from './components/ResetButton';
import { useState, useEffect } from 'react';

const App = () => {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(1);
  const [percentage, setPercentage] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateTipAmount = (bill, percentage, people) => {
    return (bill * percentage) / 100 / people ;
  };

  const calculateTotalAmount = (bill, tipAmount, people) => {
    return (bill / people) + tipAmount;
  };

  useEffect(() => {
    const tip = calculateTipAmount(bill, percentage, people);
    const total = calculateTotalAmount(bill, tip, people);
    setTipAmount(tip);
    setTotalAmount(total);
  }, [bill, percentage, people]);

  const handleReset = () => {
    setBill(0);
    setPeople(1);
    setPercentage(0);
    setTipAmount(0);
    setTotalAmount(0);
  };

  return (
    <div className="general-wrapper">
      <div className="data-wrapper">
        <BillInput
          id={'BillInput'}
          value={bill}
          onChange={(e) => setBill(parseFloat(e.target.value))}
        />
        <TipPercentageButtons
          percentage={percentage}
          setPercentage={setPercentage}
        />
        <PeopleInput people={people} setPeople={setPeople} />
      </div>
      <div className="result-wrapper">
        <ResultDisplay tipAmount={tipAmount} totalAmount={totalAmount} />
        <ResetButton onClick={handleReset} />
      </div>
    </div>
  );
};

export default App;