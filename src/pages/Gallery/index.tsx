// libraries
import { type FC } from 'react';
import Heading from 'components/shared/Heading';
import { useTranslation } from 'react-i18next';

const Gallery: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Heading
        title={t('galleryHeading.title')}
        highlighted={t('galleryHeading.highlighted')}
        style="gallery"
      />
    </>
  );
};

export default Gallery;
