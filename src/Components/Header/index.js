import React, { useEffect, useState } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import HeaderNav from '../Header.Nav';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
`;

const StyledLink = styled(Link)`
  justify-self: center;
  align-self: center;
`;

const Header = () => {
  const staticData = useStaticQuery(graphql`
    query {
      contentstackHeader {
        logo {
          url
        }
      }
    }
  `);

  const [clientSideData, setClientSideData] = useState(null);
  useEffect(() => {
    fetch('https://1s2s3s4test.com')
      .then((response) => response.json())
      .then((resultData) => {
        setClientSideData(resultData);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <StyledHeader>
      <StyledLink to='/'>
        <img src={staticData.contentstackHeader.logo.url} alt='logo'></img>
      </StyledLink>
      <h2>Header</h2>
      {clientSideData}
      <HeaderNav />
    </StyledHeader>
  );
};

export default Header;
