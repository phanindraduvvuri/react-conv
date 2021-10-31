import React from "react";

import CountryInput from "./CountryInput";

const CountryRow = () => {
  return (
    <div className="countryRow">
      <CountryInput />
      <p>To</p>
      <CountryInput />
    </div>
  );
};

export default CountryRow;
