import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
    this.state = { tracks: [] };
  }

  componentDidMount() {
    this.fetchTracks();
  }

  fetchTracks() {
    axios.get('/tracks').then(response => {
      this.setState({ tracks: response.data });
    });
  }

  renderTracklist() {
    let tracklist = null;
    if (this.state.tracks.length > 0) {
      tracklist = <Tracklist tracks={this.state.tracks} />;
    }
    return tracklist;
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
};

export default HomePage;
