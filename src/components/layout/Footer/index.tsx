// libraries
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { useFooterMenu } from 'components/layout/Footer/config';
import { useTranslation } from 'react-i18next';
import LinkButton from 'components/shared/LinkButton';

const Footer: FC = () => {
  const footerMenu = useFooterMenu();
  const { t } = useTranslation();

  return (
    <div className="footer-bg">
      <div className="container">
        <div className="footer-menu">
          <div className="footer-info">
            <h2 className="footer-info-title">{t('footer.title')}</h2>
            <a className="footer-phone" href={`tel:${t('footer.phone')}`}>
              {t('footer.phone')}
            </a>
            <p className="footer-address">{t('footer.address')}</p>
            <LinkButton text={t('footer.buttonText')} link="/" style="secondary" />
          </div>
          <div className="footer-nav">
            <p className="useful-links-title">{t('footer.usefulLinks')}</p>
            <nav>
              <ul className="footer-nav-menu">
                {footerMenu.map(({ id, text, route }) => (
                  <li key={id} className="footer-nav-menu-item">
                    <Link to={route}>{text}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="container footer-credits">
        <p className="credits-text">{t('footer.credits')}</p>
      </div>
    </div>
  );
};

export default Footer;
