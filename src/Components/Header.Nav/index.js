import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import HeaderNavItem from '../Header.Nav.Item';
import styled from 'styled-components';
import { onEntryChange } from '../../live-preview-sdk';
import { getHeaderRes } from '../../helper';

const NavLink = styled.ul`
display: flex;
flex-direction: row;
gap: 20px;
`

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

  const [headerData, setHeaderData] = useState(data);
  const getHeaderData = async () => {
    const headerData = await getHeaderRes();
    setHeaderData(headerData);
  };

  React.useEffect(() => {
    onEntryChange(getHeaderData);
  }, []);

  return (
    <nav>
      <NavLink>
        {headerData.contentstackHeader.navigation_menu.map(
          ({ label, page_reference }, idx) => {
            return (
              <HeaderNavItem
                key={`${label}-${idx}`}
                label={label}
                url={page_reference[0].url}
              />
            );
          }
        )}
        <HeaderNavItem
          key={`category-page`}
          label={`Category`}
          url={`/category`}
        />
      </NavLink>
    </nav>
  );
};

export default HeaderNav;
