// libraries
import { type FC } from 'react';
import Heading from 'components/shared/Heading';
import { useTranslation } from 'react-i18next';

const Offer: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Heading
        title={t('offerHeading.title')}
        highlighted={t('offerHeading.highlighted')}
        style="offer"
        color="dark"
      />
    </>
  );
};

export default Offer;
