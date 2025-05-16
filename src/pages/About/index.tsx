// libraries
import { type FC } from 'react';
import Heading from 'components/shared/Heading';
import { useTranslation } from 'react-i18next';
import BottomBanner from 'components/shared/BottomBanner';
import ActionBlock from 'components/shared/ActionBlock';
import Achievements from 'components/shared/Achievements';
import AboutBlock from 'components/AboutBlock';

const About: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Heading
        title={t('aboutPage.title')}
        highlighted={t('aboutPage.highlighted')}
        style="about-us"
      />
      <ActionBlock
        title={t('aboutPage.actionBlockTitle')}
        highlighted={t('aboutPage.actionBlockHighlighted')}
        quote={t('callToActionHome.quote')}
        callToAction={t('callToActionHome.callToAction')}
      />
      <Achievements />
      <AboutBlock />
      <BottomBanner
        title={t('bottomBannerHome.title')}
        buttonText={t('bottomBannerHome.buttonText')}
      />
    </>
  );
};

export default About;
