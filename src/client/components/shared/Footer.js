import React from 'react';
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
  margin-bottom: 1.6rem;
  max-width: 75%;
  width: 75%;
`;

const FooterSocialWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const FooterSocialLink = styled.a`
  height: 3.5rem;
  width: 3.5rem;
`;

const FooterSocialIcon = styled.div`
  height: 100%;
  width: 100%;
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
    <FooterXCXWrapper>
      <XCX />
    </FooterXCXWrapper>
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
  </FooterWrapper>
);

export default Header;
