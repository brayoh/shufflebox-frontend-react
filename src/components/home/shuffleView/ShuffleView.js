import React from 'react';
import NavTabs from '../../common/navTabs/NavTabs';
// import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Glyphicon, Nav, NavItem } from 'react-bootstrap';
import BrownBag from './BrownBagView/BrownBag';
import OngoingBrownBag from './BrownBagView/OngoingBrownBag';
import VisitorBrownBag from './BrownBagView/VisitorBrownBag';

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
          <Button className={styles.ellipsis}><Glyphicon glyph="option-horizontal" /></Button>
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
