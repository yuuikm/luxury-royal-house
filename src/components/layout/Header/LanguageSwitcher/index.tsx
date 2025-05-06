import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;
  const segments = currentPath.split('/');
  const currentLang = segments[1];
  const restPath = segments.slice(2).join('/');

  const handleLangChange = (newLang: string) => {
    const cleanRestPath = restPath ? `/${restPath}` : '';

    if (newLang === 'en') {
      navigate(`${cleanRestPath}` || '/');
    } else {
      navigate(`/ru${cleanRestPath}`);
    }

    i18n.changeLanguage(newLang);
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
