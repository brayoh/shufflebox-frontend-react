import React from 'react';
import fetch from 'isomorphic-fetch';
import fetchUrl from '../../../config';

class ShuffleEvents extends React.Component {
  constructor(props){
    super(props);
    this.shuffle = this.shuffle.bind(this);
  }

  shuffle() {
    fetch(`${fetchUrl}/api/shuffle/`, {
      method: "POST",
      headers: {
        'Authorization': process.env.TOKEN,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"type": "brownbag", "limit": 1})
    })
    .then(function(response){
      if (response.status !== 201) {
        throw `Failed to shuffle brownbags: ${response.status}`;
      }
      // Check the response data
      response.json().then(function(data) {
        return data;
      });
    })
    .catch(function(error){
      throw error;
    });
    }

  render() {
    return (
      <div className="shuffle-brown-bag">
        <h6>27 jan - 20 mar</h6>
        <h4>Next brown bag is almost up...</h4>
        <button onClick={this.shuffle} className="mdl-button mdl-js-button mdl-button--raised">
          <i className="material-icons">mood</i>SHUFFLE
        </button>
      </div>
    );
  }
}

export default ShuffleEvents;
