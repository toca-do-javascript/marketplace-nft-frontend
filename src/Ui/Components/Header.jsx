import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaUserFriends, FaSun } from 'react-icons/fa';
import logo from '../Img/logo.png';

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  background: #201231;
`;

const Logo = styled.div`
  background-image: url(${logo});
  transform: rotate(60deg);
  background-size: cover;
  height: 120px;
  width: 120px;
`;

const Icons = styled.div``;

const Pages = styled.div`
  color: white;
  display: flex;
  padding-top: 50px;
`;

const Kit = styled.div`
  color: white;
`;

const Header = () => {
  return (
    <>
      <Head>
        <Logo> </Logo>
        <Pages>
          <Link to="/">
            <Kit>HOME</Kit>
          </Link>
          <Link to="/">
            <Kit>PAGES</Kit>
          </Link>
          <Link to="/">
            <Kit>EXPLORE</Kit>
          </Link>
          <Link to="/">
            <Kit>RESOURCER</Kit>
          </Link>
          <Link to="/">
            <Kit>CREATE</Kit>
          </Link>
        </Pages>
        <Icons>
          <FaSun />
          <FaUserFriends />
        </Icons>
      </Head>
    </>
  );
};

export default Header;
