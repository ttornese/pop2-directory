import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import theme from '../../../lib/theme';
import Tracklist from '../shared/Tracklist';

const HomePageWrapper = styled.div`
  display: grid;
  justify-items: center;
  margin: 0;
`;

const AlbumArtWrapper = styled.div`
  width: 100%;
`;

const AlbumArt = styled.img`
  display: block;
  max-width: 100%;
`;

const HomePageTracklistWrapper = styled.div`
  background-color: black;
  border-top: 4px solid ${theme.colors.purple};
  width: 100%;
`;

const HomePageTracklistWrapperExtraBorder = styled.hr`
  background-color: ${theme.colors.orange};
  border-color: ${theme.colors.orange};
  border-top: 2px solid ${theme.colors.orange};
  margin: 0;
  width: 100%;
`;


class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      tracks: null,
    };
  }

  componentDidMount() {
    this.fetchAlbum();
  }

  fetchAlbum() {
    axios.get('/api/album').then(response => {
      this.setState({ tracks: response.data });
    });
  }

  renderTracklist() {
    const { tracks } = this.state;
    return (
      tracks && tracks.length > 0 ?
        <Tracklist tracks={tracks} /> :
        null
    );
  }

  render() {
    return (
      <HomePageWrapper>
        <AlbumArtWrapper>
          <AlbumArt src="http://www.wepluggoodmusic.com/wp-content/uploads/2017/12/charli-xcx-pop-2.jpg" />
        </AlbumArtWrapper>
        <HomePageTracklistWrapper>
          <HomePageTracklistWrapperExtraBorder />
          {this.renderTracklist()}
        </HomePageTracklistWrapper>
      </HomePageWrapper>
    );
  }
}

export default HomePage;
