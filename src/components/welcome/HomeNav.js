import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, Tabs } from 'react-bootstrap';

const styles = require('./HomeNav.scss');
console.log('hehe', styles);

class HomeNav extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className={styles.homeNav}>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/home"><img src="https://www.dropbox.com/s/okgmtdpih1xxau3/Shuffle.png?raw=1" className="image is-48x48"/></a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem href="/">SHUFFLEBOX</NavItem>
            <NavItem href="/about">ABOUT</NavItem>
            <NavItem href="/faq">FAQ</NavItem>
          </Nav>
        </Navbar>
      </div>
      // <div className= "nav-bar">
      //   <img src="https://www.dropbox.com/s/okgmtdpih1xxau3/Shuffle.png?raw=1" className="image is-48x48"/>
      //   <div className="column is-half">
      //     <a href="/"> SHUFFLEBOX </a>
      //   </div>
      //     <nav>
      //       <ul>
      //         <li>
      //           <a href="/about"> ABOUT </a>
      //         </li>
      //         <li>
      //           <a href="/faq"> FAQ </a>
      //         </li>
      //       </ul>
      //     </nav>
      // </div>
    );
  }
}

export default HomeNav;
