// libraries
import { type FC } from 'react';
import Heading from 'components/shared/Heading';
import { useTranslation } from 'react-i18next';
import BottomBanner from 'components/shared/BottomBanner';

const Gallery: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Heading
        title={t('galleryHeading.title')}
        highlighted={t('galleryHeading.highlighted')}
        style="gallery"
      />
      <BottomBanner
        title={t('bottomBannerHome.title')}
        buttonText={t('bottomBannerHome.buttonText')}
      />
    </>
  );
};

export default Gallery;
