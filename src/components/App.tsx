import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import IntroSection from 'components/IntroSection';
import ActionBlock from 'components/shared/ActionBlock';
import Slider from 'components/Slider';

const App: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Slider />
      <IntroSection />
      <ActionBlock
        title={t('callToActionHome.title')}
        highlighted={t('callToActionHome.highlighted')}
        quote={t('callToActionHome.quote')}
        callToAction={t('callToActionHome.callToAction')}
      />
    </>
  );
};

export default App;
