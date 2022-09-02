import React from 'react';
import S from './NavMenu.module.css';

const NavMenu = () => {
  return (
    <nav>
      <ul className={S.header__menu}>
        <li className={S.header__menuItem}>
          <a href="/">Home</a>
        </li>
        <li className={S.header__menuItem}>
          <a href="#">About</a>
        </li>
        <li className={S.header__menuItem}>
          <a href="#">Service</a>
        </li>
        <li className={S.header__menuItem}>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
