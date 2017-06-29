import React from 'react';
import SkippedBrownBag from './SkippedBrownBag';
import ShuffleEvents from '../ShuffleEvents';
import OngoingBrownBag from './OngoingBrownBag';

class BrownBag extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="brownbag-view">
        <div className="left-panel">
          <SkippedBrownBag />
          <ShuffleEvents />
          <OngoingBrownBag />
        </div>
        <div className="right-panel">
          {/* add the on going list and visitors list components here */}
        </div>
      </div>
    );
  }
}

export default BrownBag;
