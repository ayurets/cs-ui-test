import React, { useEffect, useState } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import HeaderNav from '../Header.Nav';
import styled from 'styled-components';
import { onEntryChange } from '../../live-preview-sdk';
import { getHeaderRes } from '../../helper';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5vh;
  padding: 0 40px;
  background-color: #0073a6;
  border-radius: 15px;
  margin: 20px 20px 0 20px;
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

  const  getHeaderData = async () => {
    const headerData = await getHeaderRes();
  }


  React.useEffect(() => {
      onEntryChange(getHeaderData, {skipInitialRender: true});
  }, []);

  return (
    <StyledHeader>
      <StyledLink to='/'>
        <img src={staticData.contentstackHeader.logo.url} alt='logo'></img>
      </StyledLink>
      <HeaderNav />
    </StyledHeader>
  );
};

export default Header;
