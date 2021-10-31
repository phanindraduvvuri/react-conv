import React from "react";

const CountryInput = ({ onChangeCurrency, selected, currencyOptions }) => {
  return (
    <select value={selected} onChange={onChangeCurrency}>
      {currencyOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default CountryInput;
