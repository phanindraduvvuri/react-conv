import React from "react";

const ConvBtn = ({ calcValue }) => {
  return (
    <button type='submit' className="convBtn" onClick={calcValue}>
      Convert
    </button>
  );
};

export default ConvBtn;
