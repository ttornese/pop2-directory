import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import helpers from '../../../lib/helpers';
import Separator from '../shared/Separator';

const TrackPageWrapper = styled.div`
  display: grid;
`;

const TrackTitleWrapper = styled.div`
  margin: 1.6rem 0;
`;

const TrackLyrics = styled.div`
  border: 2px solid;
  border-image: linear-gradient(to left top,#866EAC,#A4F2A7,#85EAFF,#FF7676);
  border-image-slice: 1;
  background-color: black;
  color: ${({ theme: { colors: { purple } } }) => (purple)};
  display: grid;
  font: 1.8rem 'Orbitron', sans-serif;
  line-height: 1.13;
  padding: 1.6rem;
  grid-gap: 1.6rem;
`;

const ParagraphWrapper = styled.div`
`;

const Paragraph = styled.div`
  margin-bottom: 1.6rem;
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
    let trackTitle = null;
    if (this.state.track) {
      trackTitle = (
        <TrackTitleWrapper>
          {helpers.tracks.getSvg(this.state.track.title.split(' ').join(''))()}
        </TrackTitleWrapper>
      );
    }
    return trackTitle;
  }

  renderTrackInfo() {
    const { track } = this.state;
    return track && track.trackNumber ? <h3>{`Track No. ${track.trackNumber}`}</h3> : null;
  }

  renderLyrics() {
    const { track } = this.state;
    if (track) {
      return (
        <TrackLyrics>
          {
            track.lyrics.split('\n').map((paragraph, i) => (
              <ParagraphWrapper>
                <Paragraph key={`paragraph-${i}`}>
                  {
                    paragraph.split('|').map((line, j) => (
                      <span key={`line-${i}-${j}`}>{line}<br /></span>
                    ))
                  }
                </Paragraph>
                <Separator noTop />
              </ParagraphWrapper>
            ))
          }
        </TrackLyrics>
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
