import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Item = styled.li`
  list-style: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const HeaderNavItem = ({ label = '', linkUrl = '/about-us' }) => (
  <Item>
    <StyledLink to={linkUrl}>
      <span>{label}</span>
    </StyledLink>
  </Item>
);

export default HeaderNavItem;