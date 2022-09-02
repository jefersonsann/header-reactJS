import React from 'react';
import NavMenu from './NavMenu';
import User from './User';
import { header, flex, header__logo } from './Header.module.css';

const Header = () => {
  return (
    <header className={header}>
      <div className={`container wrapper ` + flex}>
        <a href="/" className={header__logo}>
          You Logo
        </a>
        <NavMenu />
        <User />
      </div>
    </header>
  );
};

export default Header;
