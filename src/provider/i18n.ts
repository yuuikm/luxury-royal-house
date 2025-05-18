import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const urlLang = window.location.pathname.split('/')[1];
const supportedLangs = ['en', 'ru'];

const isLangInPath = supportedLangs.includes(urlLang);
const savedLang = localStorage.getItem('lang') || 'en';
const defaultLang = isLangInPath ? urlLang : savedLang;

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
        contactError: 'Required field',
        contactEmailError: 'Invalid email address',
        contactFirstName: 'First Name',
        contactLastName: 'Last Name',
        contactEmail: 'Email Address',
        contactSubmit: 'Submit',
      },
      gallery: {
        title: 'More our works',
        button: 'View more works',
      },
      aboutPage: {
        highlighted: 'Discover our ',
        title: 'story and creative vision',
        actionBlockHighlighted: 'Our mission ',
        actionBlockTitle:
          'is to create interiors that reflect individuality and high status, without losing quality.',
        actionBlockCallToAction: 'Our portfolio',
        aboutBlockTitle:
          'A company that has been specializing in premium repair work for over 22 years',
        aboutBlockSubtitle:
          'We offer a full range of services: from the development of an individual project to its turnkey implementation.',
        aboutBlockExperience: '22 years of experience',
        aboutBlockExperienceText:
          'During this time, we have successfully completed more than 500 unique projects, each of which has become the embodiment of impeccable quality, style and modern design',
        aboutActivityTitle: 'Our area of activity',
        aboutActivityDescription:
          'We work with objects of any complexity: from apartments and houses to luxury villas and commercial real estate.',
        aboutMissionTitle: 'Our mission',
        aboutMissionDescription:
          'Our mission is to transform your home or office into a unique space that combines functionality, aesthetics and comfort',
      },
      achievements: {
        projectsLabel: 'Completed projects',
        projectsNumber: '500',
        customersLabel: 'Satisfied customers',
        customersNumber: '100',
        yearsLabel: 'Years of experience',
        yearsNumber: '22',
      },
      portfolioHeading: {
        highlighted: 'Our projects ',
        title: 'are your luxury',
      },
      offerHeading: {
        highlighted: 'The art of renovation ',
        title: 'for luxury living',
      },
      galleryHeading: {
        highlighted: 'Our ',
        title: 'works',
      },
      contactsHeading: {
        highlighted: 'Contact us ',
        title: 'to explore opportunities',
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
      footer: {
        title: 'Нужна помощь?',
        phone: '056 656 0888',
        address:
          "Iris Bay Tower, 145 Al Mustaqbal Street, Business Bay, Za'abeel, Dubai, 29th Floor",
        buttonText: 'СВЯЖИТЕСЬ С НАМИ',
        credits: '©2024 - 2025 | Все права защищены',
        usefulLinks: 'Полезные ссылки',
      },
      contacts: {
        socialTitle: 'Социальные сети',
        addressTitle: 'Адресс',
        emailTitle: 'Email',
        contactFormTitle: 'Остались вопросы? Напишите нам!',
        address:
          "Iris Bay Tower, 145 Al Mustaqbal Street, Business Bay, Za'abeel, Dubai, 29th Floor",
        email: 'info@luxuryroyalhouse.ae',
        contactError: 'Это поле обязательное',
        contactEmailError: 'Неверный email адрес',
        contactFirstName: 'Имя',
        contactLastName: 'Фамилия',
        contactEmail: 'Email адрес',
        contactSubmit: 'Отправить',
      },
      gallery: {
        title: 'Больше наших работ',
        button: 'Смотреть больше',
      },
      aboutPage: {
        highlighted: 'Откройте для себя ',
        title: 'нашу историю и творческое видение',
        actionBlockHighlighted: 'Наша миссия – ',
        actionBlockTitle:
          'создавать интерьеры, отражающие индивидуальность и высокий статус, не теряя при этом качества.',
        actionBlockCallToAction: 'Наше портфолио',
        aboutBlockTitle:
          'Компания, которая специализируется на ремонтных работах премиум-класса более 22 лет.',
        aboutBlockSubtitle:
          'Мы предлагаем полный спектр услуг: от разработки индивидуального проекта до его реализации «под ключ».',
      },
      achievements: {
        projectsLabel: 'Успешных проектов',
        projectsNumber: '500',
        customersLabel: 'Довольных клиентов',
        customersNumber: '100',
        yearsLabel: 'Опыт работы',
        yearsNumber: '22',
      },
      portfolioHeading: {
        highlighted: 'Наши проекты - ',
        title: 'ваша роскошь',
      },
      offerHeading: {
        highlighted: 'Искусство ремонта ',
        title: 'для роскошной жизни',
      },
      galleryHeading: {
        highlighted: 'Наши ',
        title: 'работы',
      },
      contactsHeading: {
        highlighted: 'Свяжитесь с нами, ',
        title: 'чтобы узнать наши возможности',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLang,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
