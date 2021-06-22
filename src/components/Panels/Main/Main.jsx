import React, { useState, useEffect, useContext } from 'react';
import { FiHeart } from 'react-icons/fi';
import { FavContext } from '../../../context/FavouritesContext';
import { axiosRequest, BASE_URL } from '../../../api/exchange.api';
import shortenPrice from '../../../helpers/shortenPrice';
import './Main.scss';

function Main() {
  const [currencies, setCurrencies] = useState();
  const [favourites, setFavourites] = useContext(FavContext);

  useEffect(
    () =>
      axiosRequest('get', `${BASE_URL}/exchangerates/tables/C`).then((response) => {
        setCurrencies(response.data[0].rates);
      }),
    [],
  );

  function addToFav(currency) {
    const listedCurrency = currencies.filter((item) => item.code === currency.code);
    const favouritedCurrency = favourites.filter((item) => item.code === currency.code);

    if (favouritedCurrency.length > 0 && listedCurrency[0].code === favouritedCurrency[0].code) {
      return;
    }

    const MAX_FAVOURITE_CURRENCIES = 5;

    if (favourites.length >= MAX_FAVOURITE_CURRENCIES) {
      return;
    }
    setFavourites((prevState) => [...prevState, currency]);
  }

  return (
    <div className="main-panel">
      <div className="greeting-container">
        <h1 className="greeting-heading">Hello!</h1>
        <p className="greeting-text">good too see you again</p>
        <h2 className="greeting-subheading">Have you seen today&apos;s exchange rates?</h2>
      </div>
      <div className="currencies">
        {currencies?.map((currency, idx) => (
          <div className={`${currency.code} card`} key={idx}>
            <p className="code">{currency.code}</p>
            <div className="rates">
              <p className="buy">Bid:</p>
              <p className="green">{shortenPrice(currency.bid)}</p>
              <p className="sell">Ask:</p>
              <p className="fade">{shortenPrice(currency.ask)}</p>
            </div>
            <div className="buttons">
              <div className="button">
                <FiHeart
                  size="1.5em"
                  style={
                    favourites.filter((fav) => fav.code === currency.code).length > 0 && {
                      color: '#000',
                      fill: '#cc2424',
                    }
                  }
                  onClick={() => addToFav(currency)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
