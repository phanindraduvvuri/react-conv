import "./App.css";

import CurrencyInput from "./components/CurrencyInput";
import CountryRow from "./components/CountryRow";
import ConvResult from "./components/ConvResult";
import ConvBtn from "./components/ConvBtn";

const App = () => {
  return (
    <main>
      <h2>Currency Conversion</h2>
      <CurrencyInput fromOrTo={true}/>
      <CountryRow />
      <ConvResult result="$70.00"/>
      <ConvBtn />
    </main>
  );
}

export default App;
