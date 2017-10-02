import React from 'react';

const styles = require('./VisitorBrownBag.scss');

class VisitorBrownBag extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.vistorsBrownBag}>
        <span>VISITING</span>
        <ul className={styles.visitingList}>
          <li>
            <img
            src="https://motherboard-images.vice.com//content-images/contentimage/41599/1485499779158756.jpg"
            alt="user image not found"/>
            <div className="user-info">
              <span>John Doe</span>
              <span>Director Technology</span>
            </div>
          </li>
          <li>
            <img
            src="https://motherboard-images.vice.com//content-images/contentimage/41599/1485499779158756.jpg"
            alt="user image not found"/>
            <div className="user-info">
              <span className={styles.name}>John Doe</span>
              <span>Director Technology</span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default VisitorBrownBag;
