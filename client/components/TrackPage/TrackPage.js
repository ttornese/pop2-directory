import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

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
    axios.get(document.location.pathname).then(response => {
      this.setState({ track: response.data });
    });
  }

  renderTrack() {
    return (
      this.state.track ?
        <h1>{this.state.track.title}</h1> :
        null
    );
  }

  render() {
    return (
      <TrackPageWrapper>
        {this.renderTrack()}
      </TrackPageWrapper>
    );
  }
}

export default TrackPage;
