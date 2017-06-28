import React from 'react';
import SkippedBrownBag from './SkippedBrownBag';

class BrownBag extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <SkippedBrownBag />
      </div>
    );
  }
}

export default BrownBag;
