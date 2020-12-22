import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import Navbar from './navbar';

const Layout = ({ children, title }) => {
  return (
    <Wrapper>
      <Helmet>
        <title>{title || 'Nueva App'}</title>
      </Helmet>
      <Navbar />
      <Main>{children}</Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background-color: #ccc;
  padding: 100px;
`;

const Main = styled.main`
  display: flex;
  width: 100%;
  min-height: 100%;
`;

export default Layout;
