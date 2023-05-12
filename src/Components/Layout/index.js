import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styled from 'styled-components';
import '../../styles/style.css';


const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: '#232129';
`;

const Layout = ({ children, pageContext }) => {
  return (
    <>
      <Header pageContext={pageContext}/>
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
