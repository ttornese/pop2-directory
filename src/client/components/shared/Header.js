import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import breakpoint from 'styled-components-breakpoint';
import styled, { keyframes } from 'styled-components';

import Logo from './svgs/Logo';

const PinnedHeaderAnimation = keyframes`
  from {
    transform: translateY(-10rem);
  }

  to {
    transform: translateY(0);
  }
`;

const HeaderWrapper = styled.div`
`;

const HeaderMain = styled.div`
  animation: ${PinnedHeaderAnimation} 0.2s linear;
  background-color: black;
  border-bottom: solid 4px #c9c2db;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  z-index: 100;
  width: 100%;
`;

const HeaderPinned = styled.div`
  animation: ${PinnedHeaderAnimation} 0.2s linear;
  background-color: black;
  border-bottom: solid 4px #c9c2db;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
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

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isScrolling: false };
    this.hideBar = this.hideBar.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.hideBar);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideBar);
  }

  hideBar() {
    if (this.prev > window.scrollY && window.scrollY > 94) {
      this.setState({ isScrolling: true });
    } else {
      this.setState({ isScrolling: false });
    }

    this.prev = window.scrollY;
  }

  render() {
    return (
      <HeaderWrapper>
        <HeaderMain>
          <HeaderLink to="/">
            <Logo />
          </HeaderLink>
          <HeaderExtraBorder />
        </HeaderMain>
        {
          this.state.isScrolling ?
            <HeaderPinned>
              <HeaderLink to="/">
                <Logo />
              </HeaderLink>
              <HeaderExtraBorder />
            </HeaderPinned> :
            null
        }
      </HeaderWrapper>
    );
  }
}

export default Header;
