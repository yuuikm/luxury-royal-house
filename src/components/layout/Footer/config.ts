import { LINKS } from 'constants/routes';
import { MENU_TEXTS } from 'constants/texts';

export const FOOTER_MENU = [
  { id: 'home', route: LINKS.homeLink, text: MENU_TEXTS.homeMenu },
  { id: 'about', route: LINKS.aboutLink, text: MENU_TEXTS.aboutMenu },
  { id: 'portfolio', route: LINKS.portfolioLink, text: MENU_TEXTS.portfolioMenu },
  { id: 'offer', route: LINKS.offerLink, text: MENU_TEXTS.offerMenu },
  { id: 'gallery', route: LINKS.galleryLink, text: MENU_TEXTS.galleryMenu },
  { id: 'contacts', route: LINKS.contactLink, text: MENU_TEXTS.contactsMenu },
];
