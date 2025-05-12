import type { FC } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from 'pages/Home';
import About from 'pages/About';
import Portfolio from 'pages/Portfolio';
import Offer from 'pages/Offer';
import Gallery from 'pages/Gallery';
import Contacts from 'pages/Contacts';
import { LINKS } from 'constants/routes';

const App: FC = () => {
  const LangRedirect = () => {
    const location = useLocation();
    const langInPath = location.pathname.split('/')[1];
    const savedLang = localStorage.getItem('lang') || 'en';

    if (!['ru'].includes(langInPath) && savedLang === 'ru') {
      return <Navigate to={`/ru${location.pathname}`} replace />;
    }

    if (langInPath === 'ru' && savedLang === 'en') {
      return <Navigate to={location.pathname.replace(/^\/ru/, '') || '/'} replace />;
    }

    return null;
  };

  return (
    <>
      <LangRedirect />
      <Routes>
        <Route path={LINKS.homeLink} element={<Home />} />
        <Route path={LINKS.aboutLink} element={<About />} />
        <Route path={LINKS.portfolioLink} element={<Portfolio />} />
        <Route path={LINKS.offerLink} element={<Offer />} />
        <Route path={LINKS.galleryLink} element={<Gallery />} />
        <Route path={LINKS.contactLink} element={<Contacts />} />

        <Route path="/ru">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="offer" element={<Offer />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
