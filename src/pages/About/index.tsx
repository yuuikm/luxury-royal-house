// libraries
import { type FC } from 'react';
import Heading from 'components/shared/Heading';
import { useTranslation } from 'react-i18next';
import BottomBanner from 'components/shared/BottomBanner';

const About: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Heading
        title={t('aboutHeading.title')}
        highlighted={t('aboutHeading.highlighted')}
        style="about-us"
      />
      <BottomBanner
        title={t('bottomBannerHome.title')}
        buttonText={t('bottomBannerHome.buttonText')}
      />
    </>
  );
};

export default About;
