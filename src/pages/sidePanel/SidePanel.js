import React from 'react';
import CurrentUser from './currentUser/CurrentUser';
import Calendar from './calendar/Calendar';

const styles = require('./SidePanel.scss');

class SidePanel extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div className={styles.sidePanel}>
          <CurrentUser />
          <Calendar />
        </div>
    );
  }
}

export default SidePanel;
