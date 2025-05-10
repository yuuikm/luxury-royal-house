import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const pathLang = window.location.pathname.split('/')[1];
i18n.init({
  lng: pathLang || 'en',
  fallbackLng: 'en',
});

const resources = {
  en: {
    translation: {
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
        projects: '500',
        projectsText: 'Exclusive projects',
        years: '22',
        yearsText: 'Years of experience',
        buttonText: 'Contact us to create your ideal space!',
      },
      callToActionHome: {
        highlighted: 'A company ',
        title: 'that has been specializing in premium repair work for over 22 years.',
        quote: 'Luxurious interior design for your home.',
        callToAction: 'OUR WORKS',
      },
      bottomBannerHome: {
        title: 'Your Vision, Our Masterpiece',
        buttonText: 'REQUEST A QUOTE',
      },
      footer: {
        title: 'Need help?',
        phone: '056 656 0888',
        address:
          "Iris Bay Tower, 145 Al Mustaqbal Street, Business Bay, Za'abeel, Dubai, 29th Floor",
        buttonText: 'CONTACT US',
        credits: '©2024 - 2025 | All Rights Reserved',
        usefulLinks: 'Useful links',
      },
      contacts: {
        socialTitle: 'Social media',
        addressTitle: 'Address',
        emailTitle: 'Email',
        contactFormTitle: 'Have a question? Write to us!',
        address:
          "Iris Bay Tower, 145 Al Mustaqbal Street, Business Bay, Za'abeel, Dubai, 29th Floor",
        email: 'info@luxuryroyalhouse.ae',
      },
    },
  },
  ru: {
    translation: {
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
        projects: '500',
        projectsText: 'Эксклюзивных проектов',
        years: '22',
        yearsText: 'Года опыта',
        buttonText: 'Свяжитесь с нами!',
      },
      callToActionHome: {
        highlighted: 'Компания, ',
        title: 'которая специализируется на ремонтных работах премиум-класса более 22 лет.',
        quote: 'Роскошный интерьер вашего дома.',
        callToAction: 'НАШИ РАБОТЫ',
      },
      bottomBannerHome: {
        title: 'Ваше видение — наше произведение искусства',
        buttonText: 'ЗАПРОСИТЬ СМЕТУ',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
