import React, { useState, createContext } from 'react';

const FavContext = createContext();

function FavProvider(props) {
  const [Favourites, setFavourites] = useState([]);

  return (
    <FavContext.Provider value={[Favourites, setFavourites]}>{props.children}</FavContext.Provider>
  );
}

export { FavContext, FavProvider };
