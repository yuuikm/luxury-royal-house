import { type FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import SmTitle from 'components/shared/SmTitle';
import Gallery from './Gallery';
import { galleryImages } from 'components/shared/GalleryBlock/data';
import LinkButton from 'components/shared/LinkButton';
import { LINKS } from 'constants/routes';

const getRandomImages = (count: number) => {
  return [...galleryImages].sort(() => 0.5 - Math.random()).slice(0, count);
};

const GalleryBlock: FC = () => {
  const { t } = useTranslation();
  const randomImages = useMemo(() => getRandomImages(12), []);

  return (
    <div className="container">
      <div className="gallery-wrapper">
        <SmTitle />
        <h2 className="gallery-title">{t('gallery.title')}</h2>
        <Gallery images={randomImages} />
        <LinkButton text={t('gallery.button')} link={LINKS.galleryLink} style="primary" />
      </div>
    </div>
  );
};

export default GalleryBlock;
