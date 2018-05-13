import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

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
  background-color: #ed7f7c;
  padding: 15px;
  width: 100%;
`;

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      album: {
        artist: '',
        title: '',
        tracks: [],
      },
    };
  }

  componentDidMount() {
    this.fetchAlbum();
  }

  fetchAlbum() {
    axios.get('/album').then(response => {
      this.setState({ album: response.data });
    });
  }

  renderTracklist() {
    return (
      this.state.album.tracks.length > 0 ?
        <Tracklist tracks={this.state.album.tracks} /> :
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
          {this.renderTracklist()}
        </HomePageTracklistWrapper>
      </HomePageWrapper>
    );
  }
}

export default HomePage;
