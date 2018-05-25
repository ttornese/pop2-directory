import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import helpers from '../../../lib/helpers';

const TrackPageWrapper = styled.div`
  display: grid;
`;

const Lyrics = styled.div`
  background-color: #c9c2db;
  border: solid 16px #ed7f7c;
  color: white;
  display: grid;
  font: 1.8rem 'Orbitron', sans-serif;
  line-height: 1.13;
  padding: 1.6rem;
  row-gap: 1.6rem;
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

  renderTrackInfo() {
    const { track } = this.state;
    return track && track.trackNumber ? <h3>{`Track No. ${track.trackNumber}`}</h3> : null;
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
        {this.renderTrackInfo()}
        {this.renderLyrics()}
      </TrackPageWrapper>
    );
  }
}

export default TrackPage;
