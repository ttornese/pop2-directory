import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SeparatorWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  ${({ noTop }) => (noTop ? '' : 'position: absolute; top: 45%;')}
  width: 100%;
  z-index: 0;

  &:before {
    background-color: ${(props) => (props.theme.colors.orange)};
    content: '';
    height: 0.1rem;
    width: calc(50% - 0.4rem);
  }

  &:after {
    background-color: ${(props) => (props.theme.colors.orange)};
    content: '';
    height: 0.1rem;
    width: calc(50% - 0.4rem);
  }
`;

const SeparatorSquare = styled.div`
  background-color: ${(props) => (props.theme.colors.orange)};
  height: 0.8rem;
  width: 0.8rem;
`;

const Separator = ({ noTop }) => (
  <SeparatorWrapper noTop={noTop}>
    <SeparatorSquare />
  </SeparatorWrapper>
);

Separator.propTypes = {
  noTop: PropTypes.bool,
};

Separator.defaultProps = {
  noTop: false,
};

export default Separator;
