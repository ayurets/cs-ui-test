import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from '../Header';
import Footer from '../Footer';
import styled from 'styled-components';
import '../../styles/style.css';

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  color: '#707070';
`;

const Layout = ({ children, pageContext }) => {
  const headerStaticData = useStaticQuery(graphql`
    query {
      contentstackHeader {
        logo {
          url
        }
        navigation_menu {
          label
          page_reference {
            url
          }
        }
      }
    }
  `);

  return (
    <>
      <Header pageContext={pageContext} headerStaticData={headerStaticData} />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
};

export default Layout;
