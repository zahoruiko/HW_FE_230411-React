import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AboutPage from '../Components/Pages/AboutPage';
import MainPage from '../Components/Pages/MainPage';
import NotFoundPage from '../Components/Pages/NotFoundPage';

import { AppContext } from '../AppContext/AppContext';

function AppRoutes() {
  const appInstallFolder = useContext(AppContext);
  const mainPageUrl = appInstallFolder + "/";
  const aboutPageUrl = appInstallFolder + "/about";

  return (
    <BrowserRouter>
      <Routes>
        <Route path={mainPageUrl} element={<MainPage />} />
        <Route path={aboutPageUrl} element={<AboutPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;