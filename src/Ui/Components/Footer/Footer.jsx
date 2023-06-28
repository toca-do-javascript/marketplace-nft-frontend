import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './style.css';


const Fuut = styled.div`
  background: #1E1F28;
  height: 20vh;
  padding-top: 100px;
  text-align: center;
  color: #FFF;
  text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  font-family: "DM Sans";
  line-height: 22px;
  font-weight: 300;
  
`
const Fuuter = styled.div`
margin-top: 4%;
color: white;
font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 22px;
`


const Footer = () => {
  return (
    <Fuut>
      <Link to="/" className='Link--Footer'>FAQ</Link>
      <Link to="/" className='Link--Footer'>Privacy Policy </Link>
      <Link to="/" className='Link--Footer'>Terms & Conditions </Link>
      <Link to="/" className='Link--Footer'>Whitepaper</Link>
      <Link to="/" className='Link--Footer'>Team</Link>
      <Link to="/" className='Link--Footer'>Collections</Link>
      <Link to="/" className='Link--Footer'>Home</Link>
      <Link to="/" className='Link--Footer'>Market</Link>
      <Link to="/" className='Link--Footer'>About</Link>
      <Fuuter >Copyright © 2022 NFTART. All rights reserved.</Fuuter>
    </Fuut>
  );
};

export default Footer;

