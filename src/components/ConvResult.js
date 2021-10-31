import React from "react";

const ConvResult = ({ amount, from, to, result }) => {
  if (result)
    return (
      <p>
        {amount} {from} = {result} {to}
      </p>
    );
  else return <p></p>;
};

export default ConvResult;
