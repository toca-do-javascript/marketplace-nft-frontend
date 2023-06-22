import { Copyright } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 5vh 0;
  background: #1e1f28;
  color: #ffffff;
  font-size: 0.7rem;
`;

const FooterExtra = styled.footer`
  margin-bottom: -35px;
  padding-bottom: 15px;
  background: #000000;
`;

const NavFooter = styled.footer`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const NavegacaoLink = styled.footer`
  color: #ffffff;
  margin: 10px;
`;

const RightHome = styled.footer`
  display: flex;
  justify-content: center;
  padding-bottom: 47px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <NavFooter>
        <NavegacaoLink to="/">FAQ</NavegacaoLink>
        <NavegacaoLink to="/">Privacy Policy </NavegacaoLink>
        <NavegacaoLink to="/">Terms & Conditions </NavegacaoLink>
        <NavegacaoLink to="/">Whitepaper</NavegacaoLink>
        <NavegacaoLink to="/">Team</NavegacaoLink>
        <NavegacaoLink to="/">Collections</NavegacaoLink>
        <NavegacaoLink to="/">Home</NavegacaoLink>
        <NavegacaoLink to="/">Market</NavegacaoLink>
        <NavegacaoLink to="/">About</NavegacaoLink>
      </NavFooter>
      <RightHome>Copyright © 2022 NFTART. All rights reserved.</RightHome>
      <FooterExtra></FooterExtra>
    </FooterWrapper>
  );
};

export default Footer;
