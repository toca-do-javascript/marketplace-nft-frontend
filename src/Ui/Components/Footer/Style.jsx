import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
      <p className="{footer-p}">
        Copyright © 2022 NFTART. All rights reserved.
      </p>
    </footer>
  );
};

const FooterWrapper = styled.footer`
  padding: 3 rem 1 rem 0 1rem;
  height: 5rem;
  align-items: center;
  color: #ffffff;
`;

export default Footer;
