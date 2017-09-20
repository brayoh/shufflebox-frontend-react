import React from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router';

const styles = require('./Content.scss')

class Content extends React.Component {
  constructor(props){
    super(props);
  }

  goToHomePage = () => {
    window.location.href = `${window.location.href}${'home'}`;
  }

  render(){
    return (
      <div className={styles.contentContainer}>
        <div className={styles.intro}>
        <h1>Goodbye paper<br/>Hello Shufflebox</h1>
        <p>
          With our new app you will be able to automate the task of selecting Andelans for hangouts,
          brown bag and secret santa.
        </p>
        <Button className={styles.button}>GET STARTED</Button>
        </div>
        <div className={styles.illustration}>
        <img src="https://www.dropbox.com/s/l6wx0xixdfeilso/final.png?raw=1"/>
        </div>      
      </div>
    );
  }
}

export default Content;
