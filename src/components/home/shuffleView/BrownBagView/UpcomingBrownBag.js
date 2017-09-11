import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';

import * as brownbagActions from '../../../../actions/brownbagActions';

class UpcomingBrownBag extends React.Component {
  constructor(props){
    super(props);
    this.handleConfirmBrownbag = this.handleConfirmBrownbag.bind(this);
    this.handleCancelBrownbag = this.handleCancelBrownbag.bind(this);
  }

  componentDidMount() {
    this.props.getNextPresenters();
  }

  handleConfirmBrownbag(brownBag){
    console.log('I can confirm', brownBag)
  }

  handleCancelBrownbag(brownBag){
    console.log('I can cancel', brownBag)
  }

  nextPresenters() {
    const { presenters }  = this.props;
    console.log('check', presenters);
    if (presenters.user) {
      return (
        <li className="mdl-list__item mdl-list__item--two-line">
          <span className="mdl-list__item-primary-content">
            <img
            className="avatar"
            src="https://motherboard-images.vice.com//content-images/contentimage/41599/1485499779158756.jpg"
            alt="user image not found"/>
            <div className="user-info">
              <span>{presenters.user.username}</span>
              <span className="mdl-list__item-sub-title">{presenters.user.date}</span>
            </div>
            <div>
              <button
                onClick={this.handleConfirmBrownbag}
              >
                Done
              </button>
              <button
                onClick={this.handleCancelBrownbag}
              >
                Cancel
              </button>
            </div>
          </span>
        </li>
        );
    }
    return (
      <p>Loading .....</p>
    );
  }

  render(){
    return (
      <div className="upcoming-brown-bag">
          <div className="upcoming-title">
            <h6>Upcoming Brown Bag</h6>
            <span className="mdl-list__item-sub-title">27 jan</span>
         </div>
           <ul className="mdl-list">
            {this.nextPresenters()}
        </ul>
      </div>
    );
  }
}

UpcomingBrownBag.propTypes = {
  presenters: PropTypes.object.isRequired,
  getNextPresenters: PropTypes.func.isRequired
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
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingBrownBag);
