import React, {useState, useEffect} from 'react';
import './Main.scss';
import { axiosRequest, BASE_URL } from '../../../api/exchange.api'

function Main(props) {
  const [rates, setRates] = useState()

  useEffect(() =>
    axiosRequest('get', `${BASE_URL}/exchangerates/tables/C`)
      .then(response => {
        console.log(response.data[0].rates);
        setRates(response.data[0].rates)
      })
      .catch(err => console.log(err.response))
  ,[]);
  return (
    <div className="main-panel">
      <h1>Hello!</h1>
      <p>good too see you again</p>
      <h2>Have you seen today's exchange rates?</h2>

      <div className="currencies">
        {rates?.map((currency) => {
          return (
            <div className={`${currency.code} card`}>
              <p className="code">{currency.code}</p> 
              <div className="rates">
                <p className="buy">Buy: {currency.bid}</p>
                <p className="sell">Sell: {currency.ask}</p>
              </div>
              <div className="buttons">
                <button>+</button>
                <button>-</button>
                <button>fav</button>
              </div>
            </div>)
        })}
      </div>
    </div>
  );
}

export default Main;
