import "./App.css";

import CurrencyInput from "./components/CurrencyInput";

function App() {
  return (
    <main>
      <h2>Currency Conversion</h2>
      <CurrencyInput fromOrTo={true}/>
    </main>
  );
}

export default App;
