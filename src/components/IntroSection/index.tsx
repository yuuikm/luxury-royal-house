// libraries
import { type FC } from 'react';
import SmTitle from 'components/shared/SmTitle';
import { useTranslation } from 'react-i18next';
import IntroImage from 'assets/images/home-pic-1-774x1200.webp';

const IntroSection: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="intro-section-wrapper">
        <div className="intro-image-section">
          <img src={IntroImage} />
        </div>
        <div className="intro-info-section">
          <SmTitle />
          <h3 className="intro-title">{t('intro.title')}</h3>
          <h4 className="second-title">{t('intro.subtitle')}</h4>
          <p className="intro-description">{t('intro.description')}</p>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
