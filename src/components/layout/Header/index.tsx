import type { FC } from 'react';
import { Link } from 'react-router-dom';
import companyLogo from 'assets/react.svg';
import { HEADER_MENU } from 'components/layout/Header/config';

const index: FC = () => (
  <div className="container header">
    <img className="logo" src={companyLogo} />
    <>
      <nav>
        <ul className="header-menu">
          {HEADER_MENU.map(({ id, text, route }) => (
            <li key={id} className="header-menu-item">
              <Link to={route}>{text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  </div>
);

export default index;
