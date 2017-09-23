import React from 'react';
const styles = require('./CurrentUser.scss');

class CurrentUser extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className={styles.user}>
        <img
          className={styles.userAvatar}
          src="https://motherboard-images.vice.com//content-images/contentimage/41599/1485499779158756.jpg"
          alt="user image not found"/>
        <span>What is your next event?</span>
      </div>
    );
  }
}

export default CurrentUser;
