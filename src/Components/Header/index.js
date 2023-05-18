import React from 'react';
import { Link} from 'gatsby';
import HeaderNav from '../Header.Nav';
import styled from 'styled-components';

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

const Header = ({headerStaticData}) => {

  return (
    <StyledHeader>
      <StyledLink to='/'>
        <img src={headerStaticData.contentstackHeader.logo.url} alt='logo'></img>
      </StyledLink>
      <HeaderNav headerStaticData={headerStaticData}/>
    </StyledHeader>
  );
};

export default Header;
