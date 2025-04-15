import type { FC } from 'react';
import { Link } from 'react-router-dom';
import companyLogo from 'assets/react.svg';

const index: FC = () => (
  <div className="container header">
    <img className="logo" src={companyLogo} />
    <div className="header-content">
      <nav className="header-menu">
        <ul>
          <li>
            <Link to="#">Test</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default index;
