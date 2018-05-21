import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import helpers from '../../../lib/helpers';

const TrackPageWrapper = styled.div`
  display: grid;
  margin: 15px;
`;

const Lyrics = styled.p`
  background-color: #c9c2db;
  border: solid 2px #ed7f7c;
  color: white;
  padding: 15px;
`;

class TrackPage extends Component {
  constructor() {
    super();
    this.state = { track: null };
  }

  componentDidMount() {
    this.fetchTrack();
  }

  fetchTrack() {
    axios.get(`/api${document.location.pathname}`).then(response => {
      this.setState({ track: response.data });
    });
  }

  renderTitle() {
    return (
      this.state.track ?
        helpers.tracks.getSvg(this.state.track.title.split(' ').join(''))() :
        null
    );
  }

  renderLyrics() {
    const { track } = this.state;
    if (track) {
      return (
        <Lyrics>
          {
            track.lyrics.split('\n').map(paragraph => (
              <p>
                {
                  paragraph.split('|').map(line => (
                    <span>{line}<br /></span>
                  ))
                }
              </p>
            ))
          }
        </Lyrics>
      );
    }
    return null;
  }
  render() {
    return (
      <TrackPageWrapper>
        {this.renderTitle()}
        {this.renderLyrics()}
      </TrackPageWrapper>
    );
  }
}

export default TrackPage;
