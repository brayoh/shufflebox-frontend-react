import React from 'react';
import NavTabs from '../../common/navTabs/NavTabs';
// import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';
import BrownBag from './BrownBagView/BrownBag';

const FontAwesome = require('react-fontawesome');
const styles = require('./ShuffleView.scss');

// import './ShuffleView.scss';

class ShuffleView extends React.Component {
  render() {
    return (
      <div className={styles.shuffleContainer}>
        <NavTabs>
          <LinkContainer to={'/home/brownbag'}>
            <NavItem eventKey={1}>Brown Bag</NavItem>
          </LinkContainer>
          <LinkContainer to={'/home/secretsanta'}>
            <NavItem href="/secretsanta">Secret Santa</NavItem>
          </LinkContainer>
          <LinkContainer to={'/home/hangouts'}>
            <NavItem href="/hangouts">Hangouts</NavItem>
          </LinkContainer>
          <Nav pullRight>
            <NavItem eventKey={1} href="#"><FontAwesome name="fa-ellipsis-h" /></NavItem>
          </Nav>
        </NavTabs>
        <div className={styles.shuffle}>
          {/* <BrownBag /> */}
          <div className={styles.brownBag} >brownbag</div>
          <div className={styles.leftNav}>left sidenav</div>
        </div>
      </div>
    );
  }
}

export default ShuffleView;
