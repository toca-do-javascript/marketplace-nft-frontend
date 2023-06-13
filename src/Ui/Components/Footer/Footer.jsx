import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../../../../Components/Footer/style.css';
import '../../../../Components/Footer';
import '../../../../style.css';

const Footer = () => {
  return (
    <footer className="{styles.footer}">
      <nav className="{footer-nav}">
        <NavLink to="FAQ" end>
          FAQ
        </NavLink>
        <NavLink to="/">Privacy Policy </NavLink>
        <NavLink to="/">Terms & Conditions </NavLink>
        <NavLink to="/">Whitepaper</NavLink>
        <NavLink to="/">Team</NavLink>
        <NavLink to="/">Collections</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Market</NavLink>
        <NavLink to="/">About</NavLink>
      </nav>
      <p>Copyright © 2022 NFTART. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

