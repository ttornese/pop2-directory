import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import helpers from '../../../lib/helpers';
import theme from '../../../lib/theme';

const TracklistWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3.2rem;
  justify-items: center;
  max-width: 100%;
  padding: 16px;
  width: 100%;
`;

const TracklistHeader = styled.h2`
  border-bottom: solid 0.1rem ${theme.colors.purple};
  color: ${theme.colors.purple};
  font: 2.4rem 'Orbitron', sans-serif;
  font-weight: bold;
  width: 100%;
`;

const TrackWrapper = styled.div`
  border: solid 0.1rem ${theme.colors.purple};
  border-bottom-right-radius: 0.5rem;
  border-left: none;
  border-top: none;
  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 0 0.4rem 0.4rem 0;
  position: relative;
  width: 100%;
`;

const DecorationWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 0;

  &:before {
    background-color: ${theme.colors.orange};
    content: '';
    height: 0.1rem;
    width: calc(50% - 0.4rem);
  }

  &:after {
    background-color: ${theme.colors.orange};
    content: '';
    height: 0.1rem;
    width: calc(50% - 0.4rem);
  }
`;

const Decoration = styled.div`
  background-color: ${theme.colors.orange};
  height: 0.8rem;
  width: 0.8rem;
`;

const TrackTitle = styled(Link)`
  color: ${theme.colors.purple};
  font: 1.8rem 'Orbitron', sans-serif;
  font-weight: bold;
  text-decoration: none;
  z-index: 1;

  &:hover {
    text-shadow: 0 0 0.3rem ${theme.colors.orange};
  }
`;

const TrackProducers = styled.span`
  color: ${theme.colors.purple};
  font: 1.4rem 'Orbitron', sans-serif;
  grid-column: 2;
  justify-self: end;
`;

const TrackFeatures = styled.span`
  align-self: end;
  color: ${theme.colors.purple};
  font: 1.4rem 'Orbitron', sans-serif;
  grid-column: 1;
  grid-row: 2;
`;

const TrackNumber = styled.span`
  align-self: end;
  color: white;
  font: 1.2rem 'Orbitron', sans-serif;
  grid-column: 2;
  grid-row: 2;
  justify-self: end;
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
            return (
              <TrackWrapper key={`${track.title}`}>
                <DecorationWrapper>
                  <Decoration />
                </DecorationWrapper>
                <TrackTitle to={`tracks/${path}`}>
                  {track.title}
                </TrackTitle>
                <TrackProducers>
                  A.G. Cook, SOPHIE
                </TrackProducers>
                <TrackFeatures>
                  ft. cupcakKe,
                </TrackFeatures>
                <TrackNumber>
                  {track.trackNumber}
                </TrackNumber>
              </TrackWrapper>
            );
          })
        }
      </TracklistWrapper>
    );
  }
};

Tracklist.propTypes = {
  tracks: PropTypes.array.isRequired,
};

export default Tracklist;
