import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Tabs } from 'react-bootstrap';

const styles = require('./HomeNav.scss');

class HomeNav extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className={styles.homeNav}>
        <Navbar className={styles.navBar}>
          <Navbar.Header>
            <Navbar.Brand className={styles.brand}>
              <a href="/home">
              <img src="https://www.dropbox.com/s/okgmtdpih1xxau3/Shuffle.png?raw=1"/>
              <span>SHUFFLEBOX</span>
              </a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight className={styles.rightItems}>
            <NavItem href="/about">ABOUT</NavItem>
            <NavItem href="/faq">FAQ</NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default HomeNav;
