import { useState } from 'react';
import './App.css';
import axios from 'axios';

const URL = 'https://api.freecurrencyapi.com/v1/latest'
//?apikey=fca_live_1lHSJSycVdNzvsmmCk5HLxBQePLAFnFJDqFbt1Gw&currencies=GBP&base_currency=EUR'


function App() {
  const [eur, setEur] = useState(0)
  const [gbp, setGbp] = useState(0)
  const [rate, setRate] = useState(0)


  const convert = (e) => {
    e.preventDefault()
    axios.get(URL)
      .then((response) => {
        const json = response.data
        setRate(json.data.GBP)
        setGbp(eur * json.data.GBP)
      }).catch(error => {
        alert(error)
      })
  }
  return (
    <div id="container-fluid">
      <form onSubmit={convert}>
        <div>
          <label><h2>EUR</h2></label>
          <input type="number" step="0.01" value={eur} onChange={e => setEur(e.target.value)} />
          <output>{rate}</output>
        </div>
        <div>
          <label><h2>GBP</h2></label>
          <output>{gbp.toFixed(2)} £ </output>
        </div>
        <div>
          <button><h3>Calculate</h3></button>
        </div>
      </form>
    </div>
  );
}

export default App;
