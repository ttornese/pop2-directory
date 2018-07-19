import React, { Component } from 'react';
import PropTypes from 'prop-types';
import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';

import Track from './Track';

const TracklistWrapper = styled.div`
  border: 2px solid;
  border-image: linear-gradient(to left top,#866EAC,#A4F2A7,#85EAFF,#FF7676);
  border-image-slice: 1;
  background-color: black;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3.2rem;
  justify-items: center;
  margin: 0 auto;
  max-width: 110rem;
  padding: 16px;
  width: 100%;

  ${breakpoint('desktop')`
    grid-template-columns: 1fr 1fr;
    margin-top: 1.6rem;
  `}
`;

const TracklistHeader = styled.h2`
  border-bottom: solid 0.1rem ${(props) => (props.theme.colors.purple)};
  color: ${(props) => (props.theme.colors.purple)};
  font: 2.4rem 'Orbitron', sans-serif;
  font-weight: bold;
  margin: 0;
  width: 100%;

  ${breakpoint('desktop')`
    grid-column: 1/3;
  `}
`;

class Tracklist extends Component {
  splitTrackName(track) {
    return track.split(' ');
  }

  render() {
    const { tracks } = this.props;
    return (
      <TracklistWrapper>
        <TracklistHeader>
          Tracklist
        </TracklistHeader>
        {
          tracks.map(track => {
            const splitTrack = this.splitTrackName(track.title);
            const path = splitTrack.join('_').toLowerCase();
            return <Track path={path} track={track} />;
          })
        }
      </TracklistWrapper>
    );
  }
}

Tracklist.propTypes = {
  tracks: PropTypes.array.isRequired,
};

export default Tracklist;
