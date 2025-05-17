// libraries
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import SmTitle from 'components/shared/SmTitle';
import Socials from 'components/shared/Socials';

const AboutBlock: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container about-block-bg">
      <div className="about-block-wrapper">
        <div className="about-block-one-third">
          <SmTitle color="gold" />
          <h2 className="about-block-title">{t('aboutPage.aboutBlockTitle')}</h2>
          <h4 className="about-block-subtitle">{t('aboutPage.aboutBlockSubtitle')}</h4>
        </div>
        <div className="about-block-one-third about-block-bg-img"></div>
        <div className="about-block-one-third">
          <h4 className="about-block-experience-title">{t('aboutPage.aboutBlockExperience')}</h4>
          <SmTitle color="gold" />
          <p className="about-block-description">{t('aboutPage.aboutBlockExperienceText')}</p>
          <Socials style="white" />
        </div>
      </div>
    </div>
  );
};

export default AboutBlock;
