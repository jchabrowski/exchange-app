import Main from './components/Panels/Main/Main'
import Sidebar from './components/Panels/Sidebar/Sidebar'
import Favourites from './components/Panels/Favourites/Favourites'
import './App.scss';

function App() {
  return (
    <>
      <div className="exchange-wrapper">
        <Sidebar />
        <Main />
        <Favourites />
      </div>
    </>
  );
}

export default App;
