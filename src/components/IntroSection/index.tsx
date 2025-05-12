// libraries
import { type FC } from 'react';
import SmTitle from 'components/shared/SmTitle';
import { useTranslation } from 'react-i18next';
import { useIntroSectionCounter } from 'components/IntroSection/config.ts';
import CountUp from 'react-countup';
import LinkButton from 'components/shared/LinkButton';
import { LINKS } from 'constants/routes';

const IntroSection: FC = () => {
  const { t } = useTranslation();
  const introSectionCounter = useIntroSectionCounter();

  return (
    <div className="container intro-bg">
      <div className="intro-section-wrapper">
        <div className="intro-image-section"></div>
        <div className="intro-info-section">
          <SmTitle />
          <h3 className="intro-title">{t('intro.title')}</h3>
          <h4 className="second-title">{t('intro.subtitle')}</h4>
          <p className="intro-description">{t('intro.description')}</p>
          <div className="intro-counter-projects">
            {introSectionCounter.map(({ id, number, label }) => (
              <div key={id} className="counter-item">
                <span className="counter-number">
                  <CountUp end={number} duration={3} suffix="+" />
                </span>
                <span className="counter-text">{label}</span>
              </div>
            ))}
          </div>
          <LinkButton text={t('intro.buttonText')} link={LINKS.contactLink} style="secondary" />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
