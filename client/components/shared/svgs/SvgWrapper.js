import React from 'react';
import styled from 'styled-components';

export default styled.div`
  cursor: pointer;
  ${props => (props.excludeMargin ? '' : 'margin-bottom: 15px;')}
  width: 100%;
`;
