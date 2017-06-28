import React from 'react';
import BrownBag from './shuffleView/BrownBagView/BrownBag';

class HomePage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <BrownBag />
      </div>
    );
  }
}

export default HomePage;
