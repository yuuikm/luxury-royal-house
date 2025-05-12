// libraries
import { type FC } from 'react';
import SmTitle from 'components/shared/SmTitle';
import LinkButton from 'components/shared/LinkButton';
import LRHLogo from 'assets/images/circle_logo.webp';
import { LINKS } from 'constants/routes';

type BottomBannerProps = {
  title: string;
  buttonText: string;
};

const BottomBanner: FC<BottomBannerProps> = ({ title, buttonText }) => {
  return (
    <div className="container btm-banner-bg">
      <div className="btm-banner">
        <div className="btm-banner-text-wrapper">
          <SmTitle />
          <h2 className="btm-banner-title">{title}</h2>
          <LinkButton text={buttonText} link={LINKS.contactLink} style="primary" />
        </div>
        <div className="btm-banner-image-wrapper">
          <img className="btm-banner-logo" src={LRHLogo} alt={LRHLogo} />
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
