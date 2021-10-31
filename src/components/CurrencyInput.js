import React from "react";

const CurrencyInput = () => {
  return (
    <div>
      <label htmlFor="fromTo">Amount</label>
      <input type="number" min="0" id="fromTo" />
    </div>
  );
};

export default CurrencyInput;
