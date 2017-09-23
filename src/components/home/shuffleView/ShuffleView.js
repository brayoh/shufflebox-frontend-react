import React from 'react';
import NavTabs from '../../common/navTabs/NavTabs';
// import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';
import BrownBag from './BrownBagView/BrownBag';
import OngoingBrownBag from './BrownBagView/OngoingBrownBag';
import VisitorBrownBag from './BrownBagView/VisitorBrownBag';
import { Icon } from 'react-fa';

const styles = require('./ShuffleView.scss');

// import './ShuffleView.scss';

class ShuffleView extends React.Component {
  render() {
    return (
      <div className={styles.shuffleContainer}>
        <NavTabs>
          <LinkContainer to={'/home/brownbag'}>
            <NavItem>Brown Bag</NavItem>
          </LinkContainer>
          <LinkContainer to={'/home/secretsanta'}>
            <NavItem href="/secretsanta">Secret Santa</NavItem>
          </LinkContainer>
          <LinkContainer to={'/home/hangouts'}>
            <NavItem href="/hangouts">Hangouts</NavItem>
          </LinkContainer>
          <Nav pullRight className={styles.ellipsis}>
            <NavItem href="#"><Icon name="ellipsis-h" size="2x" /></NavItem>
          </Nav>
        </NavTabs>
        <div className={styles.shuffle}>       
          <div className={styles.brownBag}>
            <BrownBag />
          </div>
          <div className={styles.leftNav}>
            <OngoingBrownBag />
            <VisitorBrownBag/>
          </div>
        </div>
      </div>
    );
  }
}

export default ShuffleView;
