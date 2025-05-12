// libraries
import { type FC } from 'react';
import Heading from 'components/shared/Heading';
import { useTranslation } from 'react-i18next';

const About: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Heading
        title={t('aboutHeading.title')}
        highlighted={t('aboutHeading.highlighted')}
        style="about-us"
      />
    </>
  );
};

export default About;
