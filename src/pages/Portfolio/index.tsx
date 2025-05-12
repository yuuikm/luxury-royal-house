// libraries
import { type FC } from 'react';
import Heading from 'components/shared/Heading';
import { useTranslation } from 'react-i18next';

const Portfolio: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Heading
        title={t('portfolioHeading.title')}
        highlighted={t('portfolioHeading.highlighted')}
        style="about-us"
      />
    </>
  );
};

export default Portfolio;
