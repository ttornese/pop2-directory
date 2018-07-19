import React from 'react';
import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';

import AppleMusic from './svgs/AppleMusic';
import Instagram from './svgs/Instagram';
import Spotify from './svgs/Spotify';
import Twitter from './svgs/Twitter';
import XCX from './svgs/XCX';

const FooterWrapper = styled.div`
  align-items: center;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.6rem;
  width: 100%;
`;

const FooterXCXWrapper = styled.div`
  margin: 3.2rem 0 1.6rem;
  max-width: 75%;
  width: 75%;

  ${breakpoint('tablet')`
    max-width: 60%;
  `}

  ${breakpoint('tablet')`
    max-width: 45%;
  `}

  &:hover {
    svg {
      filter: drop-shadow( 0 -0 15px #ed7f7c);
    }
  }
`;

const FooterSocialWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1.6rem;
  max-width: 110rem;
  width: 100%;
`;

const FooterSocialLink = styled.a`
  height: 4.5rem;
  width: 4.5rem;
`;

const FooterSocialIcon = styled.div`
  height: 100%;
  width: 100%;

  &:hover {
    svg {
      filter: drop-shadow( 0 -0 15px #ed7f7c);
    }
  }
`;

const charliSocial = [
  {
    component: () => <Instagram />,
    href: 'https://www.instagram.com/charli_xcx/?hl=en',
    key: 'footer-instagram',
  },
  {
    component: () => <Twitter />,
    href: 'https://twitter.com/charli_xcx?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
    key: 'footer-twitter',
  },
  {
    component: () => <AppleMusic />,
    href: 'https://itunes.apple.com/us/artist/charli-xcx/432942256',
    key: 'footer-apple-music',
  },
  {
    component: () => <Spotify />,
    href: 'https://open.spotify.com/artist/25uiPmTg16RbhZWAqwLBy5',
    key: 'footer-spotify',
  },
];

const Header = () => (
  <FooterWrapper>
    <FooterSocialWrapper>
      {
        charliSocial.map(social => (
          <FooterSocialLink
            href={social.href}
            key={social.key}
          >
            <FooterSocialIcon>
              {social.component()}
            </FooterSocialIcon>
          </FooterSocialLink>
        ))
      }
    </FooterSocialWrapper>
    <FooterXCXWrapper>
      <a href="http://charlixcx.tumblr.com/">
        <XCX />
      </a>
    </FooterXCXWrapper>
  </FooterWrapper>
);

export default Header;
