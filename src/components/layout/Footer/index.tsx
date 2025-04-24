// libraries
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_MENU } from 'components/layout/Footer/config.ts';

const Footer: FC = () => (
  <div className="container">
    <div className="footer-menu">
      <div className="footer-info"></div>
      <div className="footer-nav">
        <p className="footer-menu-title">Useful links</p>
        <nav>
          <ul>
            {FOOTER_MENU.map(({ id, text, route }) => (
              <li key={id}>
                <Link to={route}>{text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </div>
);

export default Footer;
