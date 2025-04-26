import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'styles/index.scss';
import App from 'components/App';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import 'provider/i18n';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Header />
    <App />
    <Footer />
  </BrowserRouter>
);
