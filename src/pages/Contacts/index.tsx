// libraries
import { type FC } from 'react';
import Heading from 'components/shared/Heading';
import { useTranslation } from 'react-i18next';
import ContactsBlock from 'components/shared/ContactsBlock';

const Contacts: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Heading
        title={t('contactsHeading.title')}
        highlighted={t('contactsHeading.highlighted')}
        style="contacts"
        color="dark"
      />
      <ContactsBlock />
    </>
  );
};

export default Contacts;
