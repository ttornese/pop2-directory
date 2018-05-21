import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from './svgs/Logo';

const HeaderWrapper = styled.nav`
  border-bottom: solid 4px #c9c2db;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
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
    <Link to="/">
      <Logo />
    </Link>
    <HeaderExtraBorder />
  </HeaderWrapper>
);

export default Header;
