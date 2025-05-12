import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import IntroSection from 'components/IntroSection';
import ActionBlock from 'components/shared/ActionBlock';
import BottomBanner from 'components/shared/BottomBanner';
import Contacts from 'components/shared/Contacts';
import Gallery from 'components/shared/GalleryBlock';

const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <IntroSection />
      <Contacts />
      <ActionBlock
        title={t('callToActionHome.title')}
        highlighted={t('callToActionHome.highlighted')}
        quote={t('callToActionHome.quote')}
        callToAction={t('callToActionHome.callToAction')}
      />
      <BottomBanner
        title={t('bottomBannerHome.title')}
        buttonText={t('bottomBannerHome.buttonText')}
      />
      <Gallery />
    </>
  );
};

export default Home;
