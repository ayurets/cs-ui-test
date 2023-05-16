import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styled from 'styled-components';
import '../../styles/style.css';
import "@contentstack/live-preview-utils/dist/main.css";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  color: '#707070';

`;

const Layout = ({ children, pageContext }) => {
  return (
    <>
      <Header pageContext={pageContext}/>
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
};

export default Layout;
