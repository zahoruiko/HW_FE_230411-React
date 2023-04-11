import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AboutPage from './Components/Pages/AboutPage';
import MainPage from './Components/Pages/MainPage';
import NotFoundPage from './Components/Pages/NotFoundPage';

import { AppContext } from './AppContext/AppContext';


function App() {
  return (
    <AppContext.Provider>
      
    </AppContext.Provider>
  );
}

export default App;