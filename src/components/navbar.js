import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../contexts/auth-context';

const Navbar = () => {
  const { isAuth } = useAuth();
  return (
    <Header>
      <Nav>
        {isAuth ? (
          <>
            <NavLink to='/dashboard'>Dashboard</NavLink>
          </>
        ) : (
          <>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/login'>Login</NavLink>
          </>
        )}
      </Nav>
    </Header>
  );
};

const Header = styled.header`
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: center;
  background-color: pink;
`;

const Nav = styled.nav`
  width: 100vw;
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: red;
  margin: 15px;
`;

export default Navbar;
