// libraries
import { type FC } from 'react';
import Heading from 'components/shared/Heading';
import { useTranslation } from 'react-i18next';
import BottomBanner from 'components/shared/BottomBanner';

const Portfolio: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Heading
        title={t('portfolioHeading.title')}
        highlighted={t('portfolioHeading.highlighted')}
        style="portfolio"
      />
      <BottomBanner
        title={t('bottomBannerHome.title')}
        buttonText={t('bottomBannerHome.buttonText')}
      />
    </>
  );
};

export default Portfolio;
