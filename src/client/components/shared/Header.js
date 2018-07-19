import React from 'react';
import { Link } from 'react-router-dom';
import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';

import Logo from './svgs/Logo';

const HeaderWrapper = styled.nav`
  background-color: black;
  border-bottom: solid 4px #c9c2db;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`;

const HeaderLink = styled(Link)`
  ${breakpoint('tablet')`
    width: 40%;
  `}

  ${breakpoint('desktop')`
    width: 30%;
  `}
`;

const HeaderExtraBorder = styled.hr`
  background-color: #ed7f7c;
  border-color: #ed7f7c;
  border-top: 2px solid #ed7f7c;
  margin: 0;
  width: 100%;
`;

//  #ed7f7c
const Header = () => (
  <HeaderWrapper>
    <HeaderLink to="/">
      <Logo />
    </HeaderLink>
    <HeaderExtraBorder />
  </HeaderWrapper>
);

export default Header;
