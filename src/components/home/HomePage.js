import React from 'react';
import PropTypes from "prop-types";
import BrownBag from './shuffleView/BrownBagView/BrownBag';
import SidePanel from './calendarView/SidePanel';
import ShuffleView from './shuffleView/ShuffleView';

import {connect} from 'react-redux';

const styles = require('./HomePage.scss');

class HomePage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className={styles.homePageContainer}>
        <SidePanel />
        <ShuffleView />
      </div> 
    );
  }
}

HomePage.propTypes = {
  brownbag: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    brownbag: state.brownbagReducer
  };
}

export default connect(mapStateToProps)(HomePage);
