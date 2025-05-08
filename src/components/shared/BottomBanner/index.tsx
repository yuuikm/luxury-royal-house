// libraries
import { type FC } from 'react';
import SmTitle from 'components/shared/SmTitle';
import LinkButton from 'components/shared/LinkButton';
import BottomBannerImg from 'assets/images/architect6-cta-pic2.webp';
import LRHLogo from 'assets/images/circle_logo.webp';

type BottomBannerProps = {
  title: string;
  buttonText: string;
};

const BottomBanner: FC<BottomBannerProps> = ({ title, buttonText }) => {
  return (
    <div className="container">
      <div className="btm-banner">
        <div className="btm-banner-text-wrapper">
          <SmTitle />
          <h2 className="btm-banner-title">{title}</h2>
          <LinkButton text={buttonText} link="/" style="primary" />
        </div>
        <div className="btm-banner-image-wrapper">
          <img className="btm-banner-logo" src={LRHLogo} alt={LRHLogo} />
          <img src={BottomBannerImg} alt={BottomBannerImg} />
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
