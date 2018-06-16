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
    return (
      tracks && tracks.length > 0 ?
        <Tracklist tracks={tracks} /> :
        null
    );
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
