import type { FC } from 'react';
import IntroSection from 'components/IntroSection';
import ActionBlock from 'components/shared/ActionBlock';
import Slider from 'components/Slider';

const App: FC = () => (
  <>
    <Slider />
    <IntroSection />
    <ActionBlock title="test" isHighlighted={true} quote="test" callToAction="test" />
  </>
);

export default App;
