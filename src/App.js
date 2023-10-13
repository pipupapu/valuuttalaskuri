import { useState } from 'react';
import './App.css';
import axios from 'axios';

const URL =  'https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_1lHSJSycVdNzvsmmCk5HLxBQePLAFnFJDqFbt1Gw&currencies=GBP&base_currency=EUR'


function App() {//export default function currency
  const [eur, setEur] = useState(0)//vaihda tähän Eur
  const [gbp, setGbp] = useState(0)//ja tähän Gpb ja muuta samat myös labeleihin
  const [rate, setRate] = useState(0)

  
  const convert = (e) => {//kokeile tähän handleSubmit, uusi alkaa const convert,tehty mallin mukaan, hae axios ja url
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
  return (//tee pari id:tä lisää, joilla määrittelet muotoiluja css:ssä ja calc->convertyms.katso tehtävä 
    <div id="container">
      <form onSubmit={convert}>
        <div>
          <label>EUR</label>
          <input type="number" step="0.01" value={eur} onChange={e => setEur(e.target.value)} /> 
          <output>{rate}</output>
        </div>
        <div>
          <label>GBP</label>
          <output>{gbp.toFixed(2)} £</output>
        </div>
        <div>
         <button>Calculate</button>
        </div>
      </form>
    </div>
  );
}

export default App;
