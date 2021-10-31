import React from "react";

import CountryInput from "./CountryInput";

const CountryRow = ({ selected, currencyOptions }) => {
  return (
    <div className="countryRow">
      <CountryInput selected={"INR"} currencyOptions={currencyOptions} />
      <p>To {}</p>
      <CountryInput selected={"EUR"} currencyOptions={currencyOptions} />
    </div>
  );
};

export default CountryRow;
