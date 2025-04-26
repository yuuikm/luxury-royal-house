export const texts = {
  en: {
    menu: {
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      offer: 'Offer',
      gallery: 'Gallery',
      contacts: 'Contacts',
    },
    intro: {
      title: 'The art of renovation for luxury living',
      subtitle: 'Luxury Royal House',
      description:
        'Our mission is to create exclusive and sophisticated renovations that reflect the luxury, personality and aesthetic of each client.',
    },
  },
  ru: {
    menu: {
      home: 'Главная',
      about: 'О нас',
      portfolio: 'Портфолио',
      offer: 'Услуги',
      gallery: 'Галерея',
      contacts: 'Контакты',
    },
    intro: {
      title: 'Искусство ремонта для роскошной жизни',
      subtitle: 'Luxury Royal House',
      description:
        'Наша миссия — создавать эксклюзивные и утончённые ремонты, отражающие роскошь, индивидуальность и эстетику каждого клиента.',
    },
  },
};

export type Language = keyof typeof texts;
