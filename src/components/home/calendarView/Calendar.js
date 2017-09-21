import React from 'react';
import CurrentUser from './CurrentUser';

const styles = require('./Calendar.scss');

class Calendar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div className={styles.calendarPanel}>
          <CurrentUser />
        </div>
    );
  }
}

export default Calendar;
