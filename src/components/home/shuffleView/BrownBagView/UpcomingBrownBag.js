import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import FlatButton from 'material-ui/FlatButton';
import {Icon} from 'react-fa';
import { Button }from 'react-bootstrap';

import * as brownbagActions from '../../../../actions/brownbagActions';

const styles = require('./UpcomingBrownBag.scss');


class UpcomingBrownBag extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.getNextPresenters();
  }

  handleConfirmBrownbag = (brownBag) => {
    brownBag.status = 'done';
    this.props.confirmBrownBag(brownBag);
    this.props.getNextPresenters();
  }

  handleCancelBrownbag = (brownBag) => {
    brownBag.status = 'not_done';
    this.props.cancelBrownBag(brownBag);
  }

  nextPresenters() {
    const { presenters }  = this.props;
    console.log('presenters', presenters)
    if (presenters.length > 0 ) {
        // const brownBag = { id: presenter.id, date: presenter.date, status:'' };
        return (
          presenters.map((presenter, index) =>
            <li key={index}>
              <img
              className="avatar"
              src={presenter.user.profile.avatar}
              alt="user image not found"/>
              <div className="user-info">
                <span>{`${presenter.user.first_name} ${presenter.user.last_name}`}</span>
                <span>{presenter.user.date}</span>
              </div>
              <Button className={styles.confirmButton} bsStyle="primary" onClick={this.handleConfirmBrownbag({ id: presenter.id, date: presenter.date, status:'' })}>
                Confirm
                </Button>          
              <Button bsStyle="danger" className={styles.cancelButton} onClick={this.handleCancelBrownbag({ id: presenter.id, date: presenter.date, status:'' })}>
            Cancel
            </Button>   
            </li>
          )
          );
    } else {
      return (
        // <Icon spin name="spinner" />
        <p>Loading .....</p>
      );
    } 
  }

  render(){
    return (
      <div className={styles.upcomingBrownBag}>
        <h5>Upcoming Brown Bag</h5>
        <span className={styles.date}>27 Jan</span>
        <ul className={styles.upcomingList}>
          {this.nextPresenters()}
        </ul>
      </div>
    );
  }
}

UpcomingBrownBag.propTypes = {
  presenters: PropTypes.object.isRequired,
  getNextPresenters: PropTypes.func.isRequired,
  confirmBrownBag: PropTypes.func.isRequired,
  cancelBrownBag: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    presenters: state.nextBrownbagReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getNextPresenters: (presenter) => {
      dispatch(brownbagActions.getNextPresenter(presenter));
    },
    confirmBrownBag: (brownBagObj) => {
      dispatch(brownbagActions.confirmBrownBag(brownBagObj));
    },
    cancelBrownBag: (brownBagObj) => {
      dispatch(brownbagActions.cancelBrownBag(brownBagObj));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingBrownBag);
