import React, { useState } from "react";
import "./emiCalculator.css";

const EmiCalculator = () => {
  const [principal, setPrincipal] = useState(15000);
  const [interestRate, setInterestRate] = useState(5);
  const [tenure, setTenure] = useState(1);
  const [emi, setEmi] = useState("");
  const [monthlyPayments, setMonthlyPayments] = useState([]);

  const calculateEmi = () => {
    const p = parseInt(principal);
    const r = parseFloat(interestRate) / (12 * 100);
    const n = parseInt(tenure) * 12;
    const emi = Math.round(
      (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    );
    setEmi(!isNaN(emi) ? emi : 0);

    const monthlyPaymentsArr = [];
    let balance = p;

    for (let i = 1; i <= n; i++) {
      const interest = Math.round(balance * r);
      const principal = Math.round(emi - interest);
      balance = Math.round(balance - principal);

      monthlyPaymentsArr.push({ month: i, principal, interest, balance });
    }

    setMonthlyPayments(monthlyPaymentsArr);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "principal") {
      setPrincipal(value);
    } else if (name === "interestRate") {
      setInterestRate(value);
    } else if (name === "tenure") {
      setTenure(value);
    }
  };

  return (
    <div className="emi-challenge">
      <div className="userInput">
        <h2>EMI Calculator</h2>
        <div>
          <label htmlFor="principal">Principal Amount</label>
          <input
            type="number"
            id="principal"
            name="principal"
            value={principal}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="interestRate">Interest Rate (%)</label>
          <input
            type="number"
            id="interestRate"
            name="interestRate"
            value={interestRate}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="tenure">Loan Tenure (years)</label>
          <input
            type="number"
            id="tenure"
            name="tenure"
            value={tenure}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button onClick={calculateEmi}>Calculate EMI</button>
        </div>
      </div>
      {emi && (
        <div>
          <h3>EMI: {emi}</h3>
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Principal</th>
                <th>Interest</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {monthlyPayments.map((mp) => (
                <tr key={mp.month}>
                  <td>{mp.month}</td>
                  <td>{mp.principal}</td>
                  <td>{mp.interest}</td>
                  <td>{mp.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EmiCalculator;
