import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import AlbumArt from './AlbumArt';
import Tracklist from './Tracklist';

const HomePageWrapper = styled.div`
  display: grid;
  justify-items: center;
  margin: 0;
`;

const HomePageTrackListWrapper = styled.div`
  background-color: black;
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

  renderAlbumArt() {
    return <AlbumArt />;
  }

  renderTracklist() {
    const { tracks } = this.state;
    let trackList = null;
    if (tracks && tracks.length > 0) {
      trackList = (
        <HomePageTrackListWrapper>
          <Tracklist tracks={tracks} />
        </HomePageTrackListWrapper>
      );
    }
    return trackList;
  }

  render() {
    return (
      <HomePageWrapper>
        {this.renderAlbumArt()}
        {this.renderTracklist()}
      </HomePageWrapper>
    );
  }
}

export default HomePage;
