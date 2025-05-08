// libraries
import { type FC } from 'react';
import { LINKS } from 'constants/routes.ts';
import FacebookIcon from 'assets/icons/facebookIcon.svg?react';
import InstagramIcon from 'assets/icons/instagramIcon.svg?react';

const Socials: FC = () => {
  return (
    <div className="socials">
      <span className="social-icon">
        <a href={LINKS.facebookLink}>
          <FacebookIcon width={24} height={24} />
        </a>
      </span>
      <span className="social-icon">
        <a href={LINKS.facebookLink}>
          <InstagramIcon width={24} height={24} />
        </a>
      </span>
    </div>
  );
};

export default Socials;
