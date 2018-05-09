import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const Track = styled.div`
  width: 100%;
`;

const Tracklist = ({ tracks }) => (
  <TracklistWrapper>
    {
      tracks.map(track => (
        <Track key={`${track.title}-${track.trackNumber}`}>
          {helpers.tracks.getSvg(track.title.split(' ').join(''))()}
        </Track>
      ))
    }
  </TracklistWrapper>
);

Tracklist.propTypes = {
  tracks: PropTypes.array.isRequired,
};

export default Tracklist;
