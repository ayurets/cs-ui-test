import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  justify-content: center;
  height: 80vh;
  color: '#232129';
  font-family: '-apple-system, Roboto, sans-serif, serif';
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
