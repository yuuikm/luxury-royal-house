// libraries
import { type FC } from 'react';
import Socials from 'components/shared/Socials';
import { useTranslation } from 'react-i18next';
import { LINKS } from 'constants/routes';
import ContactForm from 'components/shared/Contacts/ContactForm';

const Contacts: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container contacts-bg">
      <div className="contacts-wrapper">
        <div className="contacts-item-wrapper flex-1of3">
          <p className="contact-item-title">{t('contacts.socialTitle')}</p>
          <Socials />
        </div>
        <div className="contacts-item-wrapper flex-1of3">
          <p className="contact-item-title">{t('contacts.addressTitle')}</p>
          <h2 className="contacts-main-title">{t('contacts.address')}</h2>
        </div>
        <div className="contacts-item-wrapper flex-1of3">
          <p className="contact-item-title">{t('contacts.emailTitle')}</p>
          <h2 className="contacts-main-title">
            <a href={LINKS.emailLink}>{t('contacts.email')}</a>
          </h2>
        </div>
        <div className="contacts-item-wrapper flex-half">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2359.049645285485!2d55.259698958530386!3d25.185864070235137!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69001c8d0399%3A0x8f6d40395efc45af!2sIris%20Bay%20Tower!5e0!3m2!1sen!2skz!4v1746854777007!5m2!1sen!2skz"
            width="100%"
            height="550px"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contacts-item-wrapper flex-half">
          <p className="contact-form-title">{t('contacts.contactFormTitle')}</p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
