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

  const  getHeaderData = async () => {
    const headerData = await getHeaderRes();
    console.log(headerData)
  }

  useEffect(() => {
  onEntryChange(() => getHeaderData())
  }, [onEntryChange]);

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
