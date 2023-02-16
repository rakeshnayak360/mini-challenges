import React, { useState } from "react";
import "./sipCalculator.css";

const SipCalculator = () => {
  const [userValues, setUserValues] = useState({
    monthlyInvestment: 1000,
    years: 1,
    interestRate: 8,
  });
  const [totalAmount, setTotalAmount] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const calculateSip = (event) => {
    const { monthlyInvestment, interestRate, years } = userValues;

    const monthlyInterestRate = interestRate / 1200;
    const numberOfMonths = years * 12;

    const total =
      monthlyInvestment *
      ((((1 + monthlyInterestRate) ** numberOfMonths - 1) *
        (1 + monthlyInterestRate)) /
        monthlyInterestRate);

    setTotalAmount(total.toFixed(2));
    setShowResults(true);
  };

  return (
    <div className="sip-calculator">
      <h2>SIP Calculator</h2>
      <div className="form-group">
        <label>Monthly Investment</label>
        <input
          type="number"
          value={userValues.monthlyInvestment}
          onChange={(event) => (
            setUserValues({
              ...userValues,
              monthlyInvestment: event.target.value,
            }),
            setShowResults(false)
          )}
        />
      </div>
      <div className="form-group">
        <label>Number of years</label>
        <input
          type="number"
          value={userValues.years}
          onChange={(event) => (
            setUserValues({ ...userValues, years: event.target.value }),
            setShowResults(false)
          )}
        />
      </div>
      <div className="form-group">
        <label>Interest Rate</label>
        <input
          type="number"
          value={userValues.interestRate}
          onChange={(event) => (
            setUserValues({
              ...userValues,
              interestRate: event.target.value,
            }),
            setShowResults(false)
          )}
        />
      </div>
      <button type="button" onClick={() => calculateSip()}>
        Calculate
      </button>
      <div>
        {showResults && (
          <>
            <h3>
              Your Investment:
              {userValues.monthlyInvestment * userValues.years * 12}
            </h3>
            <h3>Total Amount: {totalAmount}</h3>
          </>
        )}
      </div>
    </div>
  );
};

export default SipCalculator;
