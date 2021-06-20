import React, { useContext } from 'react';
import './Favourites.scss';
import { FiXCircle } from 'react-icons/fi';
import { FavContext } from '../../../context/FavouritesContext';
import shortenPrice from '../../../helpers/shortenPrice';

function Favourites() {
  const [favourites, setFavourites] = useContext(FavContext);

  function removeFromFav(code) {
    const newCurrencies = favourites.filter((item) => item.code !== code);
    setFavourites(newCurrencies);
  }
  return (
    <div className="favourites-panel">
      <div className="favourites-container">
        <h1 className="fav-heading">Favourites</h1>
        <p className="fav-text">keep an eye on them!</p>
        <p className="fav-text silent">You can follow up to 5 favourite currencies</p>
        <div className="currencies-container">
          {favourites?.map((currency, idx) => (
            <div className={`${currency.code} fav-card`} key={idx}>
              <p className="code">
                {currency.code}
              </p>
              <div className="rates">
                <p className="buy">Bid:</p>
                <p className="green">{shortenPrice(currency.bid)}</p>
                <p className="sell">Ask:</p>
                <p className="fade">{shortenPrice(currency.ask)}</p>
              </div>
              <div className="button">
                <FiXCircle size="1.5em" onClick={() => removeFromFav(currency.code)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favourites;
