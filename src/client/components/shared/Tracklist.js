import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import helpers from '../../../lib/helpers';

const TracklistWrapper = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  justify-items: center;
  max-width: 100%;
  padding: 16px;
  width: 100%;
`;

const Track = styled(Link)`
  width: 100%;
`;

class Tracklist extends Component {
  splitTrackName(track) {
    return track.split(' ');
  }

  render() {
    const { tracks } = this.props;
    return (
      <TracklistWrapper>
        {
          tracks.map(track => {
            const splitTrack = this.splitTrackName(track);
            const path = splitTrack.join('_').toLowerCase();
            return (
              <Track key={`${track}`} to={`tracks/${path}`}>
                {helpers.tracks.getSvg(splitTrack.join(''))()}
              </Track>
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
