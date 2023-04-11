import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AboutPage from './Components/Pages/AboutPage';
import MainPage from './Components/Pages/MainPage';
import NotFoundPage from './Components/Pages/NotFoundPage';

import { AppContext } from './AppContext/AppContext';

function App() {
  const appInstallFolder = useContext(AppContext);
  const mainPageUrl = appInstallFolder + "/";
  const aboutPageUrl = appInstallFolder + "/about";
  const notFoundPageUrl = appInstallFolder + "/*";

  return (
    <BrowserRouter>
      <Routes>
        <Route path={mainPageUrl} element={<MainPage />} />
        {/* <Route path="/" element={<MainPage />} /> */}
        {/* <Route path="/HW_FE_230411/" element={<MainPage />} /> */}
        <Route path={aboutPageUrl} element={<AboutPage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/HW_FE_230411/about" element={<AboutPage />} /> */}
        
        <Route path={notFoundPageUrl} element={<NotFoundPage />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;