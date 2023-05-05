import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import HeaderNavItem from '../Header.Nav.Item';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  gap: 20px;
`;

const HeaderNav = () => {
  const data = useStaticQuery(graphql`
    query {
      contentstackHeader {
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
    <nav>
      <List>
        {data.contentstackHeader.navigation_menu.map(({label, page_reference}, idx) => {
          return <HeaderNavItem key={`${label}-${idx}`} label={label} url={page_reference[0].url} />
})}
      </List>
    </nav>
  );
};

export default HeaderNav;
