import React, {useState, useEffect} from 'react';
import './Main.scss';
import { axiosRequest, BASE_URL } from '../../../api/exchange.api'

function Main(props) {
  useEffect(() =>
    axiosRequest('get', `${BASE_URL}/exchangerates/tables/C`)
      .then(response => {
        console.log(response);
        
      })
      .catch(err => console.log(err.response))
  )
  return (
    <div className="main-panel">
      <h1>Hello!</h1>
      <p>good too see you again</p>
      <h2>Have you seen today's exchange rates?</h2>

      <div className="currencies">
        <div className="currency">
          <p>$USD price is 4.20PLN</p>
          <button>+</button>
          <button>-</button>
        </div>
        <div className="currency">
          <p>CHF price is 3.80PLN</p>
        </div>
        <div className="currency">
          <p>$AUD price is 2.80PLN</p>
        </div>
      </div>
    </div>
  );
}

export default Main;