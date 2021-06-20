import React, {useState, useEffect, useContext } from 'react';
import { FavContext } from '../../../context/FavouritesContext';
import { axiosRequest, BASE_URL } from '../../../api/exchange.api'
import { FiHeart, FiXCircle } from 'react-icons/fi';
import { getFloat } from '../../../helpers/getFloat';
import './Main.scss';

function Main() {
  const [currencies, setCurrencies] = useState();
  const [favourites, setFavourites] = useContext(FavContext);
  // const [currentInput, setCurrentInput] = useState();
  
  useEffect(() =>
  axiosRequest('get', `${BASE_URL}/exchangerates/tables/C`)
    .then(response => {
      setCurrencies(response.data[0].rates)
    })
    .catch(err => console.log(err.response))
  ,[]);

  // useEffect(() => {
  //   if(!currentInput) {
  //     return
  //   }

    
  // }, [currentInput])
  
  function addToFav(currency) {
    const listedCurrency = currencies.filter((item) => item.code === currency.code);
    const favouritedCurrency = favourites.filter((item) => item.code === currency.code);

      if(favouritedCurrency.length > 0 && listedCurrency[0].code === favouritedCurrency[0].code) {
        return
      }

      if (favourites.length >= 5) {
        return
      }
      
    setFavourites((prevState) => [...prevState, currency])
  }

  // function removeCurrency(code) {
  //   const newCurrencies = currencies.filter((item) => item.code !== code)
  //   setCurrencies(newCurrencies)
  // }

  // function handleSearchChange(e) {
  //   setCurrentInput(e.target.value);
  // }

  return (
    <div className="main-panel">
      <div className="greeting-container">
        <h1 className="greeting-heading">Hello!</h1>
        <p className="greeting-text">good too see you again</p>
        <h2 className="greeting-subheading">Have you seen today's exchange rates?</h2>
      </div>

      {/* <div className="search-container">
        <h3 className="search-heading">Cannot find your currency?</h3>
        <input type="text" placeholder="Search by currency code" className="searchbar" onChange={(e) => handleSearchChange(e)}></input>
      </div> */}
      
      <div className="currencies">
        {currencies?.map((currency, idx) => {
          return (
            <div className={`${currency.code} card`} key={idx}>
              <p className="code">{currency.code}</p> 
              <div className="rates">
                <p className="buy">Bid:</p><p className="green">{getFloat(currency.bid)}</p>
                <p className="sell">Ask:</p><p className="fade"> {getFloat(currency.ask)}</p>
              </div>
              <div className="buttons">
                {/* <div className="button">
                  <FiXCircle size="1.5em" onClick={() => removeCurrency(currency.code)} />
                </div> */}
                <div className="button">
                  <FiHeart size="1.5em" onClick={() => addToFav(currency)}/>
                </div>
              </div>
            </div>)
        })}
      </div>
    </div>
  );
}

export default Main;
