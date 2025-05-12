// libraries
import { type FC } from 'react';
import Heading from 'components/shared/Heading';
import { useTranslation } from 'react-i18next';

const Contacts: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Heading
        title={t('contactsHeading.title')}
        highlighted={t('contactsHeading.highlighted')}
        style="contacts"
      />
    </>
  );
};

export default Contacts;
