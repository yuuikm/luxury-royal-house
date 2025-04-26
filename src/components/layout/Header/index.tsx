import type { FC } from 'react';
import { Link } from 'react-router-dom';
import companyLogo from 'assets/logo.webp';
import { useHeaderMenu } from 'components/layout/Header/config';
import LanguageSwitcher from 'components/layout/Header/LanguageSwitcher';

const Header: FC = () => {
  const headerMenu = useHeaderMenu();

  return (
    <div className="container header">
      <img className="logo" src={companyLogo} />
      <>
        <nav>
          <ul className="header-menu">
            {headerMenu.map(({ id, text, route }) => (
              <li key={id} className="header-menu-item">
                <Link to={route}>{text}</Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </nav>
      </>
    </div>
  );
};

export default Header;
