import "./App.css";

import { useState, useEffect } from "react";

import CurrencyInput from "./components/CurrencyInput";
import ConvResult from "./components/ConvResult";
import ConvBtn from "./components/ConvBtn";
import CountryInput from "./components/CountryInput";

const BASE_URL = "https://api.exchangerate.host/latest";
const SYMBOL_URL = "https://api.exchangerate.host/symbols";

const App = () => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromState, setFromState] = useState();
  const [toState, setToState] = useState();
  const [amount, setAmount] = useState(1);
  const [convResult, setConvResult] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(SYMBOL_URL)
      .then((res) => res.json())
      .then((data) =>
        setCurrencyOptions(
          Object.keys(data.symbols),
          setToState(Object.keys(data.symbols)[0])
        )
      );

    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setFromState(data.base);
        setRates(data.rates);
      });

    setLoading(false);
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL}?base=${fromState}`)
      .then((res) => res.json())
      .then((data) => {
        setRates(data.rates);
      });
  }, [fromState]);

  const calcCurrencyValue = () => {
    if (loading) {
      setConvResult("Calculating");
    } else {
      const result = amount * rates[toState];
      setConvResult(result);
    }
  };

  return (
    <main>
      <h2>Currency Conversion</h2>
      <CurrencyInput amount={amount} setAmount={setAmount} />
      <div className="countryRow">
        <CountryInput
          onChangeCurrency={(e) => setFromState(e.target.value)}
          selected={fromState}
          currencyOptions={currencyOptions}
        />
        <p>To</p>
        <CountryInput
          onChangeCurrency={(e) => setToState(e.target.value)}
          selected={toState}
          currencyOptions={currencyOptions}
        />
      </div>
      <ConvResult amount={amount} from={fromState} to={toState} result={convResult} />
      <ConvBtn calcValue={calcCurrencyValue} />
    </main>
  );
};

export default App;
