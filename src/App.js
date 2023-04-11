import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AboutPage from './Components/Pages/AboutPage';
import MainPage from './Components/Pages/MainPage';
import NotFoundPage from './Components/Pages/NotFoundPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<MainPage />} /> */}
          <Route path="/HW_FE_230411/" element={<MainPage />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
          <Route path="/HW_FE_230411/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;