import React from "react";
import { Button, Container, ContainerNav, Nav } from "./styles";

import logo from './assets/NFTART.png'

export function Header() {
  return (
    <Container>
      <img src={logo} alt="" />

      <ContainerNav>
        <Nav>
          <a href="">Market</a>
          <a href="">Resource</a>
          <a href="">About</a>
        </Nav>

        <Button>Connect Wallet</Button>
      </ContainerNav>

    </Container>
  )
}