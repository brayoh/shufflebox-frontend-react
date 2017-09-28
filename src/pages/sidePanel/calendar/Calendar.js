import React from 'react';

const styles = require('./Calendar.scss');

export default class Calendar extends React.Component {
  render() {
    return (
      <div className={styles.info}>
        <span>Brown Bags</span>
        <h5>Selected Weekly</h5>
        <span>Hangouts</span>
        <h5>Selected Monthly</h5>
        <span>Secret Santa</span>
        <h5>Selected Yearly</h5>
      </div>    
    );
  }
}
