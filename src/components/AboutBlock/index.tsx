// libraries
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import SmTitle from 'components/shared/SmTitle';

const AboutBlock: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container about-block-bg">
      <div className="about-block-wrapper">
        <SmTitle color="gold" />
        <h2 className="about-block-title">{t('aboutPage.aboutBlockTitle')}</h2>
      </div>
    </div>
  );
};

export default AboutBlock;
