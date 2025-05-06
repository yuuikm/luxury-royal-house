import { LINKS } from 'constants/routes';
import { useTranslation } from 'react-i18next';

export const useFooterMenu = () => {
  const { t } = useTranslation();

  return [
    { id: 'home', route: LINKS.homeLink, text: t('menu.home') },
    { id: 'about', route: LINKS.aboutLink, text: t('menu.about') },
    { id: 'portfolio', route: LINKS.portfolioLink, text: t('menu.portfolio') },
    { id: 'offer', route: LINKS.offerLink, text: t('menu.offer') },
    { id: 'gallery', route: LINKS.galleryLink, text: t('menu.gallery') },
    { id: 'contacts', route: LINKS.contactLink, text: t('menu.contacts') },
  ];
};
