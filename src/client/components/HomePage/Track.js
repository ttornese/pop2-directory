import React from 'react';
import PropTypes from 'prop-types';
import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Separator from '../shared/Separator';

const TrackWrapper = styled.div`
  border: solid 0.1rem ${(props) => (props.theme.colors.purple)};
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

const TrackTitle = styled(Link)`
  color: ${(props) => (props.theme.colors.purple)};
  font: 1.8rem 'Orbitron', sans-serif;
  font-weight: bold;
  text-decoration: none;
  z-index: 1;

  &:hover {
    text-shadow: 0 0 0.3rem ${(props) => (props.theme.colors.orange)};
  }

  ${breakpoint('tablet')`
    font-size: 2.4rem;
  `}
`;

const TrackText = styled.span`
  color: ${({ number, theme: { colors } }) => (number ? colors.white : colors.purple)};
  font: ${(props) => (props.number ? '1.2rem' : '1.4rem')} 'Orbitron', sans-serif;
  ${({ features, number }) => (features || number ? 'align-self: end;' : '')}
  ${({ number }) => (!number ? '' : 'justify-self: end;')}

  ${breakpoint('tablet')`
    font-size: ${(props) => (props.number ? '1.4rem' : '1.8rem')};
  `}
`;

const Track = ({ path, track }) => (
  <TrackWrapper key={`${track.title}`}>
    <Separator />
    <TrackTitle to={`tracks/${path}`}>
      {track.title}
    </TrackTitle>
    <TrackText>
      {`prod. by ${track.producers.join(' ')}`}
    </TrackText>
    <TrackText features>
      {
        track.collaborators.length > 0 ?
        `ft. ${track.collaborators.join(', ')}` :
        ''
      }
    </TrackText>
    <TrackText number>
      {track.trackNumber}
    </TrackText>
  </TrackWrapper>
);

Track.propTypes = {
  path: PropTypes.string.isRequired,
  track: PropTypes.object.isRequired,
};

export default Track;
