// libraries
import { type FC } from 'react';
import { LINKS } from 'constants/routes.ts';
import FacebookIcon from 'assets/icons/facebookIcon.svg?react';
import InstagramIcon from 'assets/icons/instagramIcon.svg?react';

const Socials: FC = () => {
  return (
    <div className="socials">
      <span className="social-icon">
        <a href={LINKS.facebookLink} className="icon-link">
          <FacebookIcon width={15} height={15} className="social-svg" />
        </a>
      </span>
      <span className="social-icon">
        <a href={LINKS.facebookLink} className="icon-link">
          <InstagramIcon width={24} height={24} className="social-svg" />
        </a>
      </span>
    </div>
  );
};

export default Socials;
