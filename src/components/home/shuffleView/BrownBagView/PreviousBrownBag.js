import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import UUID from 'node-uuid';
import * as actions from '../../../../actions/confirmModalActions';
import ConfirmModal from '../../../common/ConfirmModal'
// import { Icon } from 'react-fa';


const styles = require('./PreviousBrownBag.scss');

class PreviousBrownBag extends React.Component {
  constructor(props) {
    super(props);
    this.handleModalCancel = this.handleModalCancel.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.listPreviousCandidates = this.listPreviousCandidates.bind(this);
  }
  
  handleClick = (user) => {
    this.props.showModal("Remove user ", user.id);
  }

  handleConfirm() {
    this.handleModalCancel();
  }

  handleModalCancel() {
    this.props.hideModal();
  }

  listPreviousCandidates(candidates) {
    const listPreviousCandidates = candidates.map((candidate) =>
      <li key={UUID.v4()}>
        <img
          className="avatar"
          src={candidate.user.profile.avatar}
          alt="user image not found"/>
          <span>{candidate.user.username}</span>
          {/* <Icon name="check-circle-o" size="2x" /> */}
          {/* <label
          className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
          htmlFor="list-checkbox-1">
            <input 
            type="checkbox" 
            id="list-checkbox-1" 
            className="mdl-checkbox__input" 
            checked
            onClick={this.handleClick(candidate)} />
          </label> */}
      </li>
    );
    return listPreviousCandidates;
  }

  render() {
    return (
      <div className={styles.previousBrownBag}>
        <h5>Previous Brown Bags</h5>
        <span className={styles.date}>27 Jan - 20 Mar</span>
        <ul className={styles.previousList}>
          {this.listPreviousCandidates(this.props.previous_candidates_list)}
        </ul>
        {/* <ConfirmModal onConfirm={this.handleConfirm} onCancel={this.handleModalCancel} /> */}
      </div>
    );
  }
}

PreviousBrownBag.propTypes = {
  previous_candidates_list: PropTypes.array,
  confirm_modal: PropTypes.object,
  showModal: PropTypes.func,
  hideModal: PropTypes.func
};

function mapStateToProps(state, ownProps) {
  return {
    previous_candidates_list: state.previousCandidatesReducer,
    confirm_modal: state.confirmModalReducer
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    showModal: (message, brownbagID) => {
      dispatch(actions.showModal(message, brownbagID));
    },
    hideModal: () => {
      dispatch(actions.hideModal());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviousBrownBag);
