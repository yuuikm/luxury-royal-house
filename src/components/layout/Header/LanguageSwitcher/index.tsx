import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;
  const segments = currentPath.split('/');
  const currentLang = segments[1];

  const handleLangChange = (newLang: string) => {
    localStorage.setItem('lang', newLang);
    i18n.changeLanguage(newLang);

    if (newLang === 'en') {
      const newPath = location.pathname.replace(/^\/ru/, '') || '/';
      navigate(newPath + location.search);
    } else {
      if (!location.pathname.startsWith('/ru')) {
        navigate('/ru' + location.pathname + location.search);
      }
    }
  };

  return (
    <div className="lang-switcher">
      <button onClick={() => handleLangChange('en')} disabled={currentLang === 'en'}>
        EN
      </button>
      <button onClick={() => handleLangChange('ru')} disabled={currentLang === 'ru'}>
        RU
      </button>
    </div>
  );
};

export default LanguageSwitcher;
