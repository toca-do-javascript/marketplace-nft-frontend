import { NavLink } from "react-router-dom";
import styled from 'styled-components'

const Navbar = styled.div`
  max-width: 1200px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

const Logo = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 700;
  color: #531885;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
`

const Pages = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  font-weight: 500;

`

const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #531885;
  }
`;

const Button = styled.button`
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  color: #531885;
  height: 52px;
  width: 172px;
  border: 1px solid #531885;
  border-radius: 60px;

`

const Header = () => {
  return (
    <>
      <Navbar>
        <Logo>Nftart</Logo>
        <Pages>
        <StyledNavLink exact to="/" activeClassName="active">
              Market
            </StyledNavLink>
            <StyledNavLink exact to="/" activeClassName="active">
              Resource
            </StyledNavLink>
            <StyledNavLink exact to="/" activeClassName="active">
              About
            </StyledNavLink>
          <Button>Connect Wallet</Button>
        </Pages>
      </Navbar>
    </>
  )
}

export default Header