import React, { Component } from 'react';
import styled from 'styled-components';

import Backseat from '../shared/svgs/Backseat';

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
  render() {
    return (
      <TrackPageWrapper>
        <Backseat />
        <Lyrics>
I can't escape all the voices, and so, I turn it up
I go to parties with strangers so I can figure it out
Run through a city at midnight to feel like a star
I want it all, even if it's fake
Breakin' your heart, split it in half
Told you it all (told you it all)
Year and a half, are we in love?
I'll never know (I'll never know)
I know I'm wrong, what a mistake
Don't ever change (don't ever change)
I can't escape all the voices, and so, I turn it up
backseat
(Your song) so loud
(Drivin') so fast
I'm better off alone
All alone, all alone, all alone
All alone, all alone, all alone, all alone, all alone
All alone, all alone, all alone, all alone
All alone, all alone, all alone, all alone
All alone, all alone, all alone, all alone
I'm wide awake, lyin' next to him and feel it all
I got a thirst for distraction that I can't take back
My fingers run through his hair
I'm grippin' at regrets
I put my mouth on his lips to taste
Breakin' your heart, split it in half
Told you it all (told you it all)
Year and a half, are we in love?
I'll never know (I'll never know)
All that went wrong, what a mistake
I'll never change (I'll never change)
I can't escape all the voices and so I turn it up
backseat
(Your song) so loud
(Drivin') so fast
I'm better off alone
All alone, all alone, all alone
All alone, all alone, all alone, all alone, all alone
All alone, all alone, all alone, all alone
All alone, all alone, all alone, all alone
All alone, all alone, all alone, all alone
All alone, all alone, all alone, all alone
All alone, all alone, all alone, all alone
All alone, all alone, all alone, all alone
All alone, all alone, all alone, all alone
Wake lyin' next
I'm wide awake lyin' next
I'm wide awake lyin' next
I'm wide awake lyin' next
Take back, I gotta take back
I gotta take back, I gotta take back, I gotta
My fingers (in the) run through his hair
My fingers run through his hair
(You're so) my fingers run through his hair
My fingers run through his hair
(Drivin') in the (in the)
I gotta take back
All alone
All alone, all alone, all alone
All alone, all alone, all alone, all alone
All alone, all alone, all alone, all alone
All alone, all alone, all alone, all alone
All alone, all alone, all alone, all alone+
It's charli, baby
It's charli, baby
        </Lyrics>
      </TrackPageWrapper>
    );
  }
}

export default TrackPage;
