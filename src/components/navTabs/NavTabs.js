import React, {PureComponent} from 'react';
import { Nav } from 'react-bootstrap';
const styles = require('./NavTabs.scss');

export default class NavTabs extends PureComponent {
  render() {
    return (
      <Nav bsStyle="tabs" className={styles.tabs}>
        {this.props.children}
      </Nav>
    );
  }
}
