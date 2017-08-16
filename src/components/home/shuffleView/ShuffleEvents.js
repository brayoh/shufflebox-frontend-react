import React from 'react';

class ShuffleEvents extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="shuffle-brown-bag">
        <h6>27 jan - 20 mar</h6>
        <h4>Next brown bag is almost up...</h4>
        <button className="mdl-button mdl-js-button mdl-button--raised">
          <i className="material-icons">shuffle</i>SHUFFLE
        </button>
      </div>
    );
  }
}

export default ShuffleEvents;
