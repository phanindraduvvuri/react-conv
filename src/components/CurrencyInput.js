import React from "react";

const CurrencyInput = ({ amount, setAmount }) => {
  return (
    <div>
      <label htmlFor="fromTo">Amount</label>
      <input type="number" min="0" id="fromTo" value={amount} onChange={(e) => setAmount(e.target.value)}/>
    </div>
  );
};

export default CurrencyInput;
