import React from 'react';
import SkippedBrownBag from './SkippedBrownBag';
import ShuffleEvents from '../ShuffleEvents';

class BrownBag extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <SkippedBrownBag />
        <ShuffleEvents />
      </div>
    );
  }
}

export default BrownBag;
