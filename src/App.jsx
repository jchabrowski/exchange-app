import React from 'react';
import Main from './components/Panels/Main/Main';
import Sidebar from './components/Panels/Sidebar/Sidebar';
import Favourites from './components/Panels/Favourites/Favourites';
import { FavProvider } from './context/FavouritesContext';
import './App.scss';

function App() {
  return (
    <FavProvider>
      <div className="exchange-wrapper">
        <Sidebar />
        <Main />
        <Favourites />
      </div>
    </FavProvider>
  );
}

export default App;
