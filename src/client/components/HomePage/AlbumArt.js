import React from 'react';
import styled from 'styled-components';

const AlbumArtWrapper = styled.div`
  width: 100%;
`;

const AlbumArtImage = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 110rem;
  width: 100%;
`;

const AlbumArt = () => (
  <AlbumArtWrapper>
    <AlbumArtImage
      src="http://www.wepluggoodmusic.com/wp-content/uploads/2017/12/charli-xcx-pop-2.jpg"
    />
  </AlbumArtWrapper>
);

export default AlbumArt;
