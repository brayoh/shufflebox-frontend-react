import React from 'react';
import SkippedBrownBag from './SkippedBrownBag';
import UpcomingBrownBag from './UpcomingBrownBag';
import ShuffleEvents from '../ShuffleEvents';
import OngoingBrownBag from './OngoingBrownBag';
import PreviousBrownBag from './PreviousBrownBag';
import VisitorBrownBag from './VisitorBrownBag';

class BrownBag extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="brownbag-view">
        <PreviousBrownBag />
        <UpcomingBrownBag />
        {/* <ShuffleEvents /> */}
        {/* <div className="right-panel">
          <OngoingBrownBag />
          <VisitorBrownBag />
        </div> */}
      </div>
    );
  }
}

export default BrownBag;
