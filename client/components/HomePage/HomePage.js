import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Backseat from '../shared/svgs/Backseat';
import Delicious from '../shared/svgs/Delicious';
import Femmebot from '../shared/svgs/Femmebot';
import Header from '../shared/Header';
import IGotIt from '../shared/svgs/IGotIt';
import Lucky from '../shared/svgs/Lucky'
import OutOfMyHead from '../shared/svgs/OutOfMyHead';
import Porsche from '../shared/svgs/Porsche';
import Tears from '../shared/svgs/Tears';
import Track10 from '../shared/svgs/Track10';

const HomePageWrapper = styled.div`
  display: grid;
  justify-items: center;
  margin: 0 0 40px;
`;

const AlbumArtWrapper = styled.div`
  width: 100%;
`;

const AlbumArt = styled.img`
  max-width: 100%;
  margin-bottom: 16px;
`;

const TrackList = styled.div`
  border: solid 3px #ed7f7c;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  max-width: 100%;
  padding: 15px 15px 0;
  width: 100%;
`;

const LinkWrapper = styled(Link)`
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

  render() {
    return (
      <HomePageWrapper>
        <AlbumArtWrapper>
          <AlbumArt src="http://www.wepluggoodmusic.com/wp-content/uploads/2017/12/charli-xcx-pop-2.jpg" />
        </AlbumArtWrapper>
        <TrackList>
          <LinkWrapper to="/track">
            <Backseat />
          </LinkWrapper>
          <OutOfMyHead />
          <Lucky />
          <Tears />
          <IGotIt />
          <Femmebot />
          <Delicious />
          <Backseat />
          <Porsche />
          <Track10 />
        </TrackList>
      </HomePageWrapper>
    );
  }
};

export default HomePage;
