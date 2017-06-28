import React from 'react';

class SkippedBrownBag extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="skipped-brown-bag">
        <ul className="mdl-list">
          <li className="mdl-list__item mdl-list__item--two-line">
          <span className="mdl-list__item-primary-content">
            <img
            className="avatar"
            src="https://motherboard-images.vice.com//content-images/contentimage/41599/1485499779158756.jpg"
            alt="user image not found"/>
            <div className="user-info">
              <span>Sandra Andela</span>
              <span className="mdl-list__item-sub-title">27 jan - 20 mar</span>
            </div>
          </span>
        </li>
        </ul>
      </div>
    );
  }
}

export default SkippedBrownBag;
