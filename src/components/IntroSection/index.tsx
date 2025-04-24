// libraries
import { type FC } from 'react';
import SmTitle from 'components/shared/SmTitle';
import { INTRO_SECTION_TEXTS } from 'constants/texts.ts';
import IntroImage from '../../../public/images/home-pic-1-774x1200.webp';

const IntroSection: FC = () => {
  return (
    <div className="container">
      <div className="intro-section-wrapper">
        <div className="intro-image-section">
          <img src={IntroImage} />
        </div>
        <div className="intro-info-section">
          <SmTitle />
          <h3 className="intro-title">{INTRO_SECTION_TEXTS.titleText}</h3>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
